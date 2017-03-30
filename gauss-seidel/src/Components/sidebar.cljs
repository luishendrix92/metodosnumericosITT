(ns gauss-seidel.sidebar
  (:require [gauss-seidel.events :refer [add-equation update-error]]
            [gauss-seidel.appstate :refer [error]]
            [gauss-seidel.eqlist :refer [equation-list]]))

(defn sidebar []
  [:div {:class "column is-one-third"}
   [:form
    [:div {:class "field has-addons"}
     [:p {:class "control"}
      [:input {:placeholder "Type in a valid equation"
               :class "input" :id "eq"
               :type "text"}]]
     [:p {:class "control"}
      [:a {:class "button is-info" :on-click add-equation} "Add to system"]]]
    [:label {:class "label"} (str "Current maximum error: " @error)]
    [:div {:class "field has-addons"}
     [:p {:class "control"}
      [:input {:placeholder "Type in a valid tolerance"
               :class "input" :id "err"
               :type "text"}]]
     [:p {:class "control"}
      [:a {:class "button is-info" :on-click update-error} "Update"]]]]
   [equation-list]])
