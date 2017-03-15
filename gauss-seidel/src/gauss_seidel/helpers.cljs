(ns gauss-seidel.helpers)

;; Required for pipeline to work, adds x to coll
;; add :: a -> List -> List
(defn add [x coll]
  (conj coll x))