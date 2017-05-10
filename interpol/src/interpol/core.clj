(ns interpol.core
  (:require [interpol.newton   :refer [interpolate]]
            [interpol.ioparser :refer :all]
            [clojure.string    :refer [join]])
  (:use [incanter core charts]))

;; Anotates each provided point below the generated plot with Incanter
;; show-points :: Plot -> List Float -> List Float -> Plot
(defn show-points [plot xs ys]
  (reduce (fn [new-plot [x y]]
            (add-pointer plot x y :text (str "(" x ", " y ")") :angle :south))
          plot (map vector xs ys)))

;; Returns a function that evaluates a point to predict in the X-axis and
;; assembles a string to be written in a file with its correspondant Y value.
;; predict :: (Float -> Float) -> (Float -> Strint)
(defn predict [interpolation]
  (fn [x] (str "Prediction for " x " -> " (interpolation x))))

;; Displays the generated interpolated function already plotted thanks to the Incanter
;; library and with its anotated points. Then it writes to a file called output.txt the
;; results of the predictions from the given points in the input.txt file.
;; main :: () -> Eff Incanter Plot Window <IO Write>
(defn main []
  (let [parsed-file        (-> "input.txt" file-lines parse-values)
        [xs ys to-predict] parsed-file
        interpolated       (interpolate xs ys)
        [start end]        [(apply min xs) (apply max xs)]
        plot               (function-plot interpolated start end)]
    (view (show-points plot xs ys))
    (->> to-predict
         (map (predict interpolated))
         (join "\n")
         (spit (str ROOT_DIR "output.txt")))))
