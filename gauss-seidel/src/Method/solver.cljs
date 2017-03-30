(ns gauss-seidel.solver
  (:require [gauss-seidel.system  :refer [make-diagonal]]
            [gauss-seidel.helpers :refer [without reduce-index]]))

(def MAX-ITERATIONS 498) ; Real number of iterations: 500

;; Returns a function that determines if an error is acceptable.
;; acceptable-error? :: Float -> (Float -> Boolean)
(defn acceptable-error? [tolerance]
  (fn [err] (<= err tolerance)))

;; For each pair of [previous x, current x], compute its error.
;; compute-errs :: List Float -> List Float -> List Float
(defn compute-errs [prev-xs curr-xs]
  (let [divide #(/ (- %1 %2) %1)]
    (map (comp (partial * 100) js/Math.abs divide)
         curr-xs prev-xs)))

;; Take the current values of x (without the cleared variable) and
;; multiply them with their corresponding right side coefficient.
;; substitute :: List Float -> List Float -> List Float
(defn substitute [xs right-side]
  (map * right-side xs))

;; Given an equation and the current values of x, isolate the nth variable
;; by taking it away from xs and the right side of the isolation, then
;; substitute the values of x in the right side and divide the result.
;; isolate :: Equation -> Int -> List Float -> Float
(defn isolate [equation n xs]
  (let [indep      (:indep equation)
        comps      (:comps equation)
        divisor    (nth comps n)
        right-side (->> comps
                        (without n)
                        (map (partial * -1))
                        (substitute (without n xs)))]
    (/ (reduce + indep right-side) divisor)))

;; Isolate the nth variable and return updated the values of x.
;; update-xs :: List Float -> Equation -> Int -> List float
(defn update-xs [xs equation n]
  (->> (isolate equation n xs)
       (assoc xs n)))

;; Take the current values of x to compute a new set of values of x.
;; compute-xs :: Diagonal -> List Float -> List Float
(defn compute-xs [diagonal xs]
  (let [num-eqs (count diagonal)]
    (reduce-index update-xs xs diagonal)))

;; The core algorithm of the Gauss-Seidel iterative method, builds up a table
;; of rows that contain the current iteration number, the values of x and
;; their current errors that determine when the iteration should stop.
;; solve-system :: Diagonal -> Iterated-Table
(defn solve-system [tolerance diagonal]
  (loop [xs    (-> diagonal count (repeat 0) vec)
         errs  (-> diagonal count (repeat "N/A") vec)
         table [[0 xs errs]]
         i     0]
    (let [new-xs    (compute-xs diagonal xs)
          new-errs  (compute-errs xs new-xs)
          row       [(inc i) new-xs new-errs]
          new-table (conj table row)]
      (if-not (or (some (acceptable-error? tolerance) new-errs)
                  (= i MAX-ITERATIONS))
        (recur new-xs new-errs new-table (inc i))
        new-table))))

;; Type alias Diagonal :: List Equation
;; Type alias Iterated-Table :: List Row
;; Type alias Row :: [Int, List Float, List Float] as List

;; Type alias Equation :: Map
;; ==========================================
;; {:comps List Float -> Numeric values of xn
;;  :indep Float}     -> Independent term