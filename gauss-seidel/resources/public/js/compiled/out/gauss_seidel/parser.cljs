(ns gauss-seidel.parser
  (:require [clojure.string :refer [replace]]
            [gauss-seidel.helpers :refer [add]]))

;; Type alias Equation :: Map
;;
;; {:comps [Float] -> Numeric values of xn
;;  :indep Float}  -> Independent term

(def comp-pattern #"(\-?\d+(?:\.\d+)?)[a-zA-Z]")
(def indep-pattern #"=(\-?\d+(?:\.\d+)?)$")
(def whitespace #"\s+")

;; parse-eq :: String -> Equation
(defn parse-eq [eq-str]
  (let [str-clean (replace eq-str whitespace "")
        indep (re-find indep-pattern str-clean)
        [c & xn] (->> str-clean
                      (re-seq comp-pattern)
                      (add indep)
                      (map (comp js/parseFloat last)))]
    {:comps xn, :indep c}))
