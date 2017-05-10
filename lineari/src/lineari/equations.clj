(ns lineari.equations)

;; From a given pair of points, creates a linear equation in the form
;; of a function that represents the union of those points.
;; make-line :: Segment -> LinearFunction
(defn make-line [[[x0 y0] [x1 y1]]]
  {:line (fn [x] (+ y0 (* (/ (- y1 y0) (- x1 x0))
                          (- x x0))))
   :a x0, :b x1})

;; Crafts a series of linear functions that pass through all the user
;; provided points in x and y so that they can be plotted or queried.
;; lineal-interp :: List Float -> List Float -> List LinearFunction 
(defn lineal-interp [xs ys]
  (->> (map vector xs ys)
       (partition 2 1)
       (map make-line)))

;; type alias LinearFunction :: Map ::
;; {:line Float -> Float
;;  :a    Float
;;  :b    Float}
;; type alias Segment        :: Vector [Point Point]
;; {:line Float -> Float
;;  :a    Float
;;  :b    Float}
;; type alias Point          :: Vector [Float Float]
