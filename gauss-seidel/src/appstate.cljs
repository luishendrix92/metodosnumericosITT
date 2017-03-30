(ns gauss-seidel.appstate
  (:require [reagent.core :as r]))

(defonce error (r/atom 0.1))
(defonce solution (r/atom []))
(defonce equations (r/atom []))
(defonce modal-state
  (r/atom {:no-diag    false
           :max-iters  false
           :bad-format false
           :checker    false}))