(ns lineari.helpers)

;; Returns the first element in a collection that satisfies a predicate.
;; first-match :: (a -> Boolean) -> Collection a -> Maybe a
(defn first-match [predicate collection]
  (or (first (drop-while (complement predicate) collection)) :nothing))

;; type alias Maybe a :: a | Nothing
