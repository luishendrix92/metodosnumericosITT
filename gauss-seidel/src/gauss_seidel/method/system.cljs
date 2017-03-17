(ns gauss-seidel.system)

;; Determine whether the nth component happens to be the greatest
;; nth-is-max :: Equation -> Int -> Boolean
(defn nth-is-max [equation n]
  (let [components (:comps equation)]
    (= (nth components n)
       (apply max components))))

;; Determines if there's a valid equation for n
;; valid :: System -> Int -> Maybe Equation
(defn valid [system n]
  (or (some #(when (nth-is-max % n) %) system)
      :nothing))

;; Sorts the equation system to fit a valid diagonal
;; make-diagonal :: System -> Maybe Diagonal
(defn make-diagonal [system]
  (loop [n        (-> system count dec)
         diagonal '()]
    (let [equation     (valid system n)
          new-diagonal (conj diagonal equation)]
      (cond
        (= equation :nothing) :nothing
        (= n 0) new-diagonal
        :else (recur (dec n) new-diagonal)))))

;; Type alias System :: List Equation
;; Type alias Diagonal :: List Equation
;; Type alias Maybe a :: a | :nothing

;; Type alias Equation :: Map
;; ==========================================
;; {:comps List Float -> Numeric values of xn
;;  :indep Float}     -> Independent term