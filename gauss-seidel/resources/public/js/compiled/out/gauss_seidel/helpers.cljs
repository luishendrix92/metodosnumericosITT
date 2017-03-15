(ns gauss-seidel.helpers)

;; Required for pipeline to work, adds x to coll
;; add :: a -> List -> List
(defn add [x coll]
  (conj coll x))

;; Returns a list that doesn't have the specified nth element
;; without-nth :: List -> Int -> List
(defn without-nth [n coll]
  (->>
    (reduce (fn [a b]
              (let [{i :i, res :res} a]
                {:i (inc i)
                 :res (if (= i n) res (conj res b))}))
            {:i 0 :res '()}
            coll)
    :res
    reverse))

;; filled-range :: Int -> a -> List a
(defn filled-range [n padding]
  (->> (range n)
       (map (fn [_] padding))
       vec))

;; zip :: List -> List -> (a -> b -> ab)
(defn zip [coll1 coll2 zipper]
  (loop [[h1 & t1] coll1
         [h2 & t2] coll2
         zipped []]
    (if (and (seq t1) (seq t2))
      (recur t1 t2 (conj zipped (zipper h1 h2)))
      (conj zipped (zipper h1 h2)))))

;; map-index :: (a -> Int -> b) -> List a -> List b
(defn map-index [mapper coll]
  (zip coll (range (count coll)) mapper))