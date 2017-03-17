(ns gauss-seidel.eqlist
  (:require [gauss-seidel.events :refer [show-solution clear-system]]
            [gauss-seidel.appstate :refer [equations]]))

(defn equation-list []
  [:div {:class "card eq-list"}
   [:header {:class "card-header"}
    [:p {:class "card-header-title"} "Equation List"]]
   [:div {:class "card-content"}
    [:div {:class "content"}
     [:p {:class "welcome"} "The following equations will go through a solving-attempt process, bear in mind that the equation system may or may not have a solution:"]
     [:ul (for [equation @equations]
            [:li equation])]]]
   [:footer {:class "card-footer"}
    [:a {:class "card-footer-item" :on-click show-solution} "Solve"]
    [:a {:class "card-footer-item" :on-click #()} "Check"]
    [:a {:class "card-footer-item" :on-click clear-system} "Clear"]]])