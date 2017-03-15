(ns gauss-seidel.helpers)

;; add :: a -> List -> List
(defn add [x coll]
  "Required for pipeline to work, adds x to coll"
  (conj coll x))