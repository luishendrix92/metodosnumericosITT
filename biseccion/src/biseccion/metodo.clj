(ns biseccion.metodo
  (:require [clojure.math.numeric-tower :as math]))

(defn funcion [x]
  (- (+ (math/expt x 4) (* 3 (math/expt x 3))) 2))

(defn x-medio [xa xb]
  (/ (+ xa xb) 2))

(defn error-porcentual [xr-actual xr-anterior]
  (math/abs (* (/ (- xr-actual xr-anterior) xr-actual) 100)))

(defn evaluar [xa xr]
  (* (funcion xa) (funcion xr)))

(defn resolver [a b finalizar?]
  (loop [fila  [1 a b (x-medio a b) (funcion (x-medio a b)) "N/A"]
         tabla [fila]]
    (let [[i xa xb xr _ _] fila
          fxafxr (evaluar xa xr)
          nuevo-xa (if (> fxafxr 0) xr xa)
          nuevo-xb (if (< fxafxr 0) xr xb)
          nuevo-xr (x-medio nuevo-xa nuevo-xb)
          nuevo-error (error-porcentual nuevo-xr xr)
          nueva-fila [(inc i)
                      nuevo-xa
                      nuevo-xb
                      nuevo-xr
                      (funcion nuevo-xr)
                      nuevo-error]]
      (if (finalizar? (inc i) nuevo-error)
        (conj tabla nueva-fila)
        (recur nueva-fila (conj tabla nueva-fila))))))