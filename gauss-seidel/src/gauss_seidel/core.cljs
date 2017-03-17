(ns gauss-seidel.core
  (:require [gauss-seidel.sidebar :refer [sidebar]]
            [gauss-seidel.table :refer [table]]
            [gauss-seidel.modals :refer [no-diag]]
            [reagent.core :as r]))

(enable-console-print!)

(defn app []
  [:div {:class "columns"}
   ;; Modals
   [no-diag]
   ;; Components
   [sidebar]
   [table]])

(r/render [app] (js/document.getElementById "app"))