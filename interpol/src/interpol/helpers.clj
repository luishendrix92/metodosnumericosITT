(ns interpol.helpers)

;; Returns a set of coordinates to update on a given MxN matrix where the
;; coordinates are given as [x, y] or [i, j] following a triangular order.
;; triangular-paths :: Int -> List Coord
(defn triangular-paths [n]
  (for [i (range 1 n), j (range n)
        :when (< i (- n j))]
    [j i]))

;; Maps only the upper triangle in a given matrix following a column-traversal
;; passing the matrix to the function, along with the current coordinates in
;; the matrix, returning the new cell values. (Ignores the First Column)
;; tri-map :: Matrix -> (Coord -> Matrix -> Matrix) -> Matrix
(defn tri-map [matrix f]
  (let [paths (triangular-paths (count matrix))]
    (reduce #(assoc-in %1 %2 (f %2 %1)) matrix paths)))

;; gen-matrix :: Int -> Matrix
(defn gen-matrix [m n]
  (mapv (fn [_] (into [] (repeat n 0))) (range m)))

;; transpose :: Matrix -> Matrix
(defn transpose [matrix]
  (apply mapv vector matrix))

;; type alias Coord :: Vector [Int Int]
;; type alias Matrix :: Vector Vector Float
