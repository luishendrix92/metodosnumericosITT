(ns trapecio.method)

;; original-func :: Float -> Float
(defn original-func [x]
  (+ 0.2
     (* 25 x)
     (* -200 (js/Math.pow x 2))
     (* 675  (js/Math.pow x 3))
     (* -900 (js/Math.pow x 4))
     (* 400  (js/Math.pow x 5))))

;; integrated-func :: Float -> Float
(defn integrated-func [x]
  (+ (* 0.2  x)
     (* 25   (-> x (js/Math.pow 2) (/ 2)))
     (* -200 (-> x (js/Math.pow 3) (/ 3)))
     (* 675  (-> x (js/Math.pow 4) (/ 4)))
     (* -900 (-> x (js/Math.pow 5) (/ 5)))
     (* 400  (-> x (js/Math.pow 6) (/ 6)))))

;; eval-integral :: (Float -> Float) -> Float
(defn eval-integral [integral a b]
  (- (integral b) (integral a)))

;; Applies the Multiple Application Trapeze rule for numeric
;; integration using a designated number of segments.
;; solve-integral :: Float -> Float -> Int -> Solution
(defn solve-integral [a b n]
  (let [f        original-func
        h        (-> b (- a) (/ n))
        real     (eval-integral integrated-func a b)
        segments (->> (range 0 (inc n))
                      (map (comp f (partial + a) (partial * h)))
                      vec)
        first-sg (first segments)
        last-sg  (peek segments)
        sum-segs (- (reduce + segments) first-sg last-sg)
        solution (* (- b a)
                    (/ (+ first-sg (* 2 sum-segs) last-sg)
                       (* 2 n)))]
    {:error (- real solution)
     :real-integral real
     :integral solution
     :segments segments}))

;; Type alias Solution :: Map
;; {:error         Float
;;  :real-integral Float
;;  :integral      Float
;;  :segments      Vector Float}