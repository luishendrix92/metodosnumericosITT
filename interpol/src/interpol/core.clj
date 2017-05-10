(ns interpol.core
  (:require [interpol.newton   :refer [interpolate]]
            [interpol.ioparser :refer :all])
  (:use [incanter core charts]))

;; Anotates each provided point below the generated plot with Incanter
;; show-points :: Plot -> List Float -> List Float -> Plot
(defn show-points [plot xs ys]
  (reduce (fn [new-plot [x y]]
            (add-pointer plot x y :text (str "(" x ", " y ")") :angle :south))
          plot (map vector xs ys)))

;; Returns a function that evaluates a point to predict in the X-axis and
;; assembles a string to be written in a file with its correspondant Y value.
;; predict :: (Float -> Float) -> (Float -> String)
(defn predict [interpolation]
  (fn [x] (str "Prediction for " x " -> " (interpolation x))))

;; -main :: Arg Strings -> Eff Incanter Plot Window <IO Write>
(defn -main [in-filename out-filename & args]
  (let [[xs ys to-predict] (-> in-filename file-lines parse-values)
        interpolated       (interpolate xs ys)
        [start end]        [(apply min xs) (apply max xs)]
        plot               (function-plot interpolated start end)]
    (-> plot (set-title "Cubic Newton Interpolation") (show-points xs ys) view)
    (->> to-predict
         (map (predict interpolated))
         assemble-file
         (spit (str ROOT_DIR out-filename)))))
