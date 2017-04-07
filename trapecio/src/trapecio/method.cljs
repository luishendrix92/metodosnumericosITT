(ns trapecio.method)

;; f :: Float -> Float
(defn f [x]
  (+ 0.2
     (* 25 x)
     (* -200 (js/Math.pow x 2))
     (* 675  (js/Math.pow x 3))
     (* -900 (js/Math.pow x 4))
     (* 400  (js/Math.pow x 5))))

;; integrated-f :: Float -> Float
(defn integrated-f [x]
  (+ (* 0.2  x)
     (* 25   (-> x (js/Math.pow 2) (/ 2)))
     (* -200 (-> x (js/Math.pow 3) (/ 3)))
     (* 675  (-> x (js/Math.pow 4) (/ 4)))
     (* -900 (-> x (js/Math.pow 5) (/ 5)))
     (* 400  (-> x (js/Math.pow 6) (/ 6)))))

;; eval-integral :: (Float -> Float) -> Float
(defn eval-integral [a b]
  (- (integrated-f b) (integrated-f a)))

(defn err-rp [real obtained]
  (* (js/Math.abs (/ (- real obtained) real))
     100))

;; Applies the Multiple Application Trapezoidal rule for numeric
;; integration using a designated number of segments.
;; solve-integral :: Float -> Float -> Int -> Float -> Solution
(defn solve-integral [a b n]
  (let [real    (eval-integral a b)
        h        (-> b (- a) (/ n))
        segments (->> (range 0 (inc n))
                      (map (comp f (partial + a) (partial * h)))
                      vec)
        first-sg (first segments)
        last-sg  (peek segments)
        sum-segs (- (reduce + segments) first-sg last-sg)
        solution (* (- b a)
                    (/ (+ first-sg (* 2 sum-segs) last-sg)
                       (* 2 n)))]
    {:error         (- real solution)
     :integral      solution
     :real-integral real}))

(defn make-row [a b n]
  (let [{real     :real-integral
         error    :error
         integral :integral} (solve-integral a b n)]
    [n integral error (err-rp real integral)]))

;; Takes a maximum number of segments (for stopping recursion in case the
;; error doesn't reach the desired spec) and the range limits, assembes
;; the displayed table for the results up to a certain error spec.
;; make-table :: Float -> Float -> Int -> Float -> Table
(defn make-table
  ([a b max-n spec]
   (make-table 2 a b [(make-row a b 1)] max-n spec))
  ([i a b table max-n spec]
   (let [new-row (make-row a b i)
         errp    (peek new-row)]
     (if-not (or (>= i max-n)
                 (<= errp spec))
       (recur (+ i 2) a b (conj table new-row) max-n spec)
       (conj table new-row)))))

;; Type alias Solution :: Map
;; {:error         Float
;;  :integral      Float
;;  :real-integral Float)))

;; Type alias Table :: Vector<Row>
;; Type alias Row :: Vector<T> [Int Float Float Float]
