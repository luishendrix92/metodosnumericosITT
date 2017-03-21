(ns gauss-seidel.core
  (:require [gauss-seidel.modals :refer [no-diag bad-format checker max-iters]]
            [gauss-seidel.appstate :refer [modal-state]]
            [gauss-seidel.sidebar :refer [sidebar]]
            [gauss-seidel.table :refer [table]]
            [reagent.core :as r]))

(enable-console-print!)

(defn app []
  [:div {:class "columns"}
   ;; Modals
   (when (:no-diag @modal-state)    [no-diag])
   (when (:checker @modal-state)    [checker])
   (when (:max-iters @modal-state)  [max-iters])
   (when (:bad-format @modal-state) [bad-format])
   ;; Components
   [sidebar]
   [table]])

(r/render [app] (js/document.getElementById "app"))