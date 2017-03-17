(ns gauss-seidel.appstate
  (:require [reagent.core :as r]))

(defonce error (r/atom 0.1))
(defonce solution (r/atom []))
(defonce equations (r/atom []))