(ns interpol.helpers)

;; Returns a set of coordinates to update on a given m x n matrix where
;; the coordinates are given as [x, y] or [i, j]. If the user wants, the
;; order of the triangular traversal can be reversed so that instead of
;; following the "row by row" order, it follows a "column by column" one.
;; triangular-paths :: Int -> Bool -> Vector Coord
(defn triangular-paths [n rev?]
  (for [i (range n), j (range n)
        :when (< i (- n j))]
    (if rev? [j i] [i j])))

;; Maps only the upper triangle in a given matrix following a column-traversal
;; or a row-traversal order and passing the matrix to the function, along with
;; the current coordinates in the matrix, returning the new cell values.
;; tri-map :: Matrix -> Bool -> (Matrix -> Coord -> Matrix) -> Matrix
(defn tri-map [matrix rev? f]
  (let [paths (triangular-paths (count matrix) rev?)]
    (reduce #(assoc-in %1 %2 (f %2 %1)) matrix paths)))

;; gen-matrix :: Int -> Matrix
(defn gen-matrix [m n]
  (mapv (fn [_] (into [] (repeat n 0))) (range m)))

;; transpose :: Matrix -> Matrix
(defn transpose [matrix]
  (apply mapv vector matrix))

;; type alias Coord :: Vector [Int Int]
;; type alias Matrix :: Vector Vector Float
