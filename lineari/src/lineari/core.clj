(ns lineari.core
  (:require [lineari.helpers   :refer :all]
            [lineari.equations :refer [lineal-interp]]
            [clojure.string    :refer [join]])
  (:use [incanter core charts]))

;; Anotates each provided point below the generated plot with Incanter
;; show-points :: Plot -> List Float -> List Float -> Plot
(defn show-points [plot xs ys]
  (reduce (fn [new-plot [x y]]
            (add-pointer plot x y :text (str "(" x ", " y ")") :angle :south))
          plot (map vector xs ys)))

;; Plots a set of linear equations and returns the plot for further
;; modification and manipulation using Incanter's methods.
;; plot-lines :: List LinearFunction -> Plot
(defn plot-lines [[{first-line :line a :a b :b} & lines]]
  (reduce (fn [plot {:keys [line a b]}] (add-function plot line a b))
          (function-plot first-line a b) lines))

;; Returns a function that evaluates an x coordinate inside its rightful
;; segment and returns its interpolated y coordinate prediction.
;; predict :: List LinearFunction -> (Float -> String)
(defn predict [lines]
  (fn [x]
    (let [segment    (first-match #(<= (:a %) x (:b %)) lines)
          prediction (if (= segment :nothing)
                       "No prediction, segment not found"
                       ((:line segment) x))]
      (str "Prediction for " x " -> " prediction))))

;; main :: () -> Eff Incanter Plot Window <IO Write>
(defn main []
  (let [parsed-file        (-> "input.txt" file-lines parse-values)
        [xs ys to-predict] parsed-file
        interpolated       (lineal-interp xs ys)
        plot               (plot-lines interpolated)]
    (view (show-points plot xs ys))
    (->> to-predict
         (map (predict interpolated))
         (join "\n")
         (spit (str ROOT_DIR "output.txt")))))

;; type alias LinearFunction :: Map ::
;; {:line Float -> Float
;;  :a    Float
;;  :b    Float}
