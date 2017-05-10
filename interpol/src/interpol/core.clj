(ns interpol.core
  (:require [interpol.newton :refer [interpolate]])
  (:use [incanter core charts optimize]))

;; Anotates each provided point below the generated plot with Incanter
;; show-points :: Plot -> List Float -> List Float -> Plot
(defn show-points [plot xs ys]
  (reduce (fn [new-plot [x y]]
            (add-pointer plot x y :text (str "(" x ", " y ")") :angle :south))
          plot (map vector xs ys)))

;; Displays the generated interpolated function already plotted thanks to the Incanter
;; library and with its anotated points. Can be closed any time.
;; show-plot :: List Float -> List Float -> Eff Incanter Plot Window
(defn show-plot [xs ys]
  (let [interpolated (interpolate xs ys)
        start        (apply min xs)
        end          (apply max xs)]
    (-> (function-plot interpolated start end)
        (show-points xs ys)
        view)))
