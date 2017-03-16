(ns gauss-seidel.helpers)

;; Returns a list that doesn't have the specified nth element
;; remove-at :: List -> Int -> List
(defn remove-at [n coll]
  (->>
    (reduce (fn [a b]
              (let [{i :i, res :res} a]
                {:i (inc i)
                 :res (if (= i n) res (conj res b))}))
            {:i 0 :res '()}
            coll)
    :res
    reverse))

;; Creates a range from 0 to n-1 and fills it with something
;; filled-range :: Int -> a -> List a
(defn filled-range [n padding]
  (->> (range n)
       (map (fn [_] padding))
       vec))

;; Takes two equal-size collections and sends both values
;; to a function that acts as a mapper
;; zip :: List -> List -> (a -> b -> ab)
(defn zip [coll1 coll2 zipper]
  (loop [[h1 & t1] coll1
         [h2 & t2] coll2
         zipped []]
    (if (and (seq t1) (seq t2))
      (recur t1 t2 (conj zipped (zipper h1 h2)))
      (conj zipped (zipper h1 h2)))))

;; Same behaviour as map but it also provides the index
;; map-index :: (a -> Int -> b) -> List a -> List b
(defn map-index [mapper coll]
  (zip coll (range (count coll)) mapper))