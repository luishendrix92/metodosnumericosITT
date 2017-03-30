(ns biseccion.core
  (:require [biseccion.metodo :refer [resolver]]))

(def separador "------------------------------------------------------------")

;; manejar-a :: () -> Int -> Float -> Boolean
(defn manejar-a []
  (println "¿Qué máximo de iteraciones aceptarás?")
  (let [max (Integer/parseInt (read-line))]
    (fn [i ea] (>= i max))))

;; manejar-b :: () -> Int -> Float -> Boolean
(defn manejar-b []
  (println "¿Cuál es tu error sugerido?")
  (let [err-sug (Float/parseFloat (read-line))]
    (fn [i ea] (<= ea err-sug))))

(defn imprimir-tabla [tabla]
  (println separador)
  (doseq [[i xa xb xr fxr ea] tabla]
    (println (str "i: "     i))
    (println (str "Xa: "    xa))
    (println (str "Xb: "    xb))
    (println (str "Xr: "    xr))
    (println (str "f(Xr): " fxr))
    (println (str "Ea: "    ea))
    (println separador))
  (let [[_ _ _ xr _ ea] (peek tabla)]
    (println (str "\nLa raíz aproximada es Xr: " xr
                  "y el error Ea: " ea "."))))

(defn iniciar []
  (println "Introduce los valores de Xa y Xb:")
  (def xa (Float/parseFloat (read-line)))
  (def xb (Float/parseFloat (read-line)))

  (println "\n¿Qué condición se usará para detener el proceso?")
  (println "a) Máximo de iteraciones | b) Error sugerido")
  (def condicion
    (let [respuesta (read-line)]
      (case respuesta
        "a" (manejar-a)
        "b" (manejar-b)
        (fn [i ea] (<= ea 5.0)))))

  (imprimir-tabla (resolver xa xb condicion)))
