(ns gauss-seidel.system)

;; Type alias System :: [Equation]
;; Type alias Diagonal :: [[Float]]
;; Type alias Maybe a :: a | :nothing

;; Determine whether the nth component happens to be the greatest
;; nth-is-max :: List -> Int -> Boolean
(defn nth-is-max [components n]
  (= (nth components n) (apply max components)))

;; Determines if there's a valid equation for n
;; valid :: System -> Int -> Maybe Equation
(defn valid [system n]
  (let [equations (map :comps system)]
    (or (some
          #(when (nth-is-max % n) %)
          equations) 
        :nothing)))

;; Sorts the equation system to fit a valid diagonal
;; make-diagonal :: System -> Maybe Diagonal
(defn make-diagonal [system]
  (loop [n (-> system count dec)
         diagonal '()]
    (let [equation (valid system n)
          new-diagonal (conj diagonal equation)]
      (cond
        (= equation :nothing) :nothing
        (= n 0) new-diagonal
        :else (recur (dec n) new-diagonal)))))