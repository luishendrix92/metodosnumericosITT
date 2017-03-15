(ns gauss-seidel.solver
  (:require [gauss-seidel.system :refer [make-diagonal]]
            [gauss-seidel.helpers :refer [without-nth zip map-index filled-range]]))

;; acceptable-error? :: Float -> Float -> Boolean
(defn acceptable-error? [tolerance]
  (fn [err] (<= err tolerance)))

;; substitute :: Int -> List Float -> List Float -> List Float
(defn substitute [n xs right-side]
  (zip right-side (without-nth n xs) *))

;; compute-errs :: List Float -> List Float -> List Float
(defn compute-errs [prev-xs curr-xs]
  (->> (zip curr-xs prev-xs #(/ (- %1 %2) %1))
       (map (comp (partial * 100) js/Math.abs))))

;; isolate :: Equation -> Int -> List Float -> Float
(defn isolate [equation n xs]
  (let [indep (:indep equation)
        comps (:comps equation)
        divisor (nth comps n)
        right-side (->> comps
                        (without-nth n)
                        (map (partial * -1))
                        (substitute n xs))]
    (/ (reduce + indep right-side) divisor)))

;; compute-xs :: Diagonal -> List Float -> List Float
(defn compute-xs [diagonal xs]
  (->> diagonal
       (map-index #(isolate %1 %2 xs))))

;; solve-system :: Diagonal -> Iterated-Table
(defn solve-system [tolerance diagonal]
  (loop [xs (filled-range (count diagonal) 0)
         errs (filled-range (count diagonal) 100)
         table []
         i 0]
    (let [row [i xs errs]
          new-xs (compute-xs diagonal xs)
          new-errs (compute-errs xs new-xs)
          new-table (conj table row)]
      (if-not (some (acceptable-error? tolerance) new-errs)
        (recur new-xs new-errs new-table (inc i))
        new-table))))

;; Type alias Diagonal :: List Equation
;; Type alias Iterated-Table :: List Row
;; Type alias Row :: [Int, List Float, List Float] as List

;; Type alias Equation :: Map
;; ==========================================
;; {:comps List Float -> Numeric values of xn
;;  :indep Float}     -> Independent term
