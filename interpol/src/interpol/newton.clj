(ns interpol.newton
  (:require [interpol.helpers :refer [tri-map gen-matrix transpose]]))

;; Applies the formula for Newton's divided difference.
;; divided-difference :: Float -> Float -> Float -> Float -> Float
(defn divided-difference [fxi fxj xi xj]
  (/ (- fxi fxj)
     (-  xi  xj)))

;; Computes a set of divided differences using values of x and y in the form
;; of a triangular matrix where the first column holds the values of f(x) and
;; the first row holds the result of the divided differences.
;; divided-differences :: List Float -> List Float -> Matrix Float
(defn divided-differences [xs ys]
  (let [num-xs            (count xs)
        triangular-matrix (->> (gen-matrix num-xs num-xs)
                               (concat [ys]) (into [])
                               transpose)]
    (tri-map triangular-matrix
             (fn [[i j :as path] matrix]
               (divided-difference
                 (get-in matrix [(inc i) (dec j)])
                 (get-in matrix [i (dec j)])
                 (nth xs (+ i j)) (nth xs i))))))

;; Assembles an "ith" term of the resultant polynomial.
;; make-term :: List Float -> Float -> List Float -> (Int -> Float)
(defn make-term [xs x differences]
  (fn [i] (* (nth differences i)
             (reduce * 1 (map #(- x (nth xs %)) (range i))))))

;; Computes a polynomial that passes through all the given points and
;; approximates the other possible values of f(x) within the interval
;; interpolate :: List Float -> List Float -> (Float -> Float)
(defn interpolate [xs ys]
  (let [differences (first (divided-differences xs ys))]
    (fn [x] (->> (range (count xs))
                 (map (make-term xs x differences))
                 (apply +)))))
