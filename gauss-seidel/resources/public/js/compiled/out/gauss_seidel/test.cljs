(ns gauss-seidel.test)

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
                        (substitute n xs))]
    (/ (reduce + indep right-side) divisor)))

;; Use the previous values of x to determine the next values of x by isolating
;; the corresponding variable for each equation in the diagonal.
;; compute-xs :: Diagonal -> List Float -> Li+st Float
(defn compute-xs [diagonal xs]
  (let [num-eqs (count diagonal)]
    (:xs (reduce (fn [{n :n xs :xs :as result} equation]
                   (assoc result
                          :n (inc n)
                          :xs (-> (isolate equation n xs)
                                  (assoc xs n))))
                 {:n 0 :xs xs}
                 diagonal))))