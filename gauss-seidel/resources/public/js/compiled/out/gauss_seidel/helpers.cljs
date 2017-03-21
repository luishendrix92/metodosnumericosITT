(ns gauss-seidel.helpers)

;; Returns a list that doesn't have the specified nth element
;; without :: List -> Int -> List
(defn without [n coll]
  (->> (reduce (fn [a b]
                 (let [{i :i, res :res} a]
                   {:i (inc i)
                    :res (if (= i n) res (conj res b))}))
               {:i 0 :res []}
               coll) :res))

;; Same behaviour as reduce but it also provides the index
;; reduce-index :: (a -> Int -> b) -> List a -> b
(defn reduce-index [reducer initial coll]
  (loop [index 0
         [head & tail] coll
         reduced initial]
    (if (seq tail)
      (recur (inc index) tail (reducer reduced head index))
      (reducer reduced head index))))