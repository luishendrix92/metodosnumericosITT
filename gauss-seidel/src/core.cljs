(ns gauss-seidel.core
  (:require [gauss-seidel.appstate :refer [modal-state]]
            [gauss-seidel.sidebar  :refer [sidebar]]
            [gauss-seidel.table    :refer [table]]
            [gauss-seidel.modals   :refer [no-diag bad-format
                                           checker max-iters]]
            [reagent.core :as r]))

(defn app []
  [:div {:class "columns"}
   (when (:no-diag    @modal-state) [no-diag])
   (when (:checker    @modal-state) [checker])
   (when (:max-iters  @modal-state) [max-iters])
   (when (:bad-format @modal-state) [bad-format])
   [sidebar]
   [table]])

(r/render [app] (js/document.getElementById "app"))