(ns gauss-seidel.solver
  (:require [gauss-seidel.system :refer [make-diagonal]]
            [gauss-seidel.helpers :refer [remove-at zip map-index
                                          filled-range reduce-index]]))

(def MAX-ITERATIONS 498) ; Real number of iterations: 500

;; Returns a function that determines if an error is acceptable
;; by comparing it against a previously given tolerance.
;; acceptable-error? :: Float -> (Float -> Boolean)
(defn acceptable-error? [tolerance]
  (fn [err] (<= err tolerance)))

;; Take two lists of values of x, one for the previous values and one
;; for the current values, zip and compute their respective errors.
;; compute-errs :: List Float -> List Float -> List Float
(defn compute-errs [prev-xs curr-xs]
  (->> (zip curr-xs prev-xs #(/ (- %1 %2) %1))
       (map (comp (partial * 100) js/Math.abs))))

;; Take the current values of x (without the cleared variable) and
;; multiply them with their corresponding right side coefficient.
;; substitute :: Int -> List Float -> List Float -> List Float
(defn substitute [xs right-side]
  (zip right-side xs *))

;; Given an equation and the current values of x, solate the nth variable
;; by taking it away from xs and the right side of the isolation, then
;; substitute the values of x in the right side and divide the result.
;; isolate :: Equation -> Int -> List Float -> Float
(defn isolate [equation n xs]
  (let [indep (:indep equation)
        comps (:comps equation)
        divisor (nth comps n)
        right-side (->> comps
                        (remove-at n)
                        (map (partial * -1))
                        (substitute (remove-at n xs)))]
    (/ (reduce + indep right-side) divisor)))

;; Use the previous values of x to determine the next values of x by isolating
;; the corresponding variable for each equation in the diagonal.
;; compute-xs :: Diagonal -> List Float -> Li+st Float
(defn compute-xs [diagonal xs]
  (let [num-eqs (count diagonal)]
    (:xs (reduce (fn [{n :n xs :xs :as result} equation]
                   (assoc result
                          :n (inc n)
                          :xs (->> (isolate equation n xs)
                                   (assoc xs n))))
                 {:n 0 :xs xs}
                 diagonal))))

;; The core algorithm of the Gauss-Seidel iterative method, builds up a table
;; of rows that contain the current iteration number, the values of x and
;; their current errors that determine when the iteration should stop.
;; solve-system :: Diagonal -> Iterated-Table
(defn solve-system [tolerance diagonal]
  (loop [xs (-> diagonal count (filled-range 0))
         errs (-> diagonal count (filled-range "N/A"))
         table [[0 xs errs]]
         i 0]
    (let [new-xs  (compute-xs diagonal xs)
          new-errs (compute-errs xs new-xs)
          row [(inc i) new-xs new-errs]
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
