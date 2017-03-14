(ns sistemaecdos.parser
  (:require [clojure.string :refer [replace]]))

;; Type alias Equation :: Map
;;
;; {:x Int  -> Numeric value of x1
;;  :y Int  -> Numeric value of x2
;;  :c Int} -> Independent term

(def whitespace #"\s+")
(def eq-pattern #"(\-?\d*)(?:x|a)([\+\-]?\d*)(?:y|b)=(\d+)")

;; parse-num :: String -> Int
(defn parse-num [num-str]
  (case num-str
        ""   1
        "+"  1
        "-" -1
        (js/parseInt num-str)))

;; parse-eq :: String -> Equation
(defn parse-eq [eq-str]
  (let [str-clean (replace eq-str whitespace "")
        [_ x y c] (->> str-clean
                       (re-seq eq-pattern)
                       first
                       (map parse-num))]
    {:x x, :y y, :c c}))