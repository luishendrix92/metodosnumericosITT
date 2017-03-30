(ns gauss-seidel.eqlist
  (:require [components.appstate :refer [equations solution]]
            [components.events   :refer [show-solution open-modal clear]]))

(defn equation-list []
  [:div {:class "card eq-list"}
   [:header {:class "card-header"}
    [:p {:class "card-header-title"} "Equation List"]]
   [:div {:class "card-content"}
    [:div {:class "content"}
     [:p {:class "welcome"} "The following equations will go through a solving-attempt process, bear in mind that the equation system may or may not have a solution:"]
     [:ul (for [equation @equations]
            [:li {:key equation} equation])]]]
   [:footer {:class "card-footer"}
    [:a {:class "card-footer-item" :on-click show-solution} "Solve"]
    [:a {:class "card-footer-item" :on-click (open-modal :checker)} "Check"]
    [:a {:class "card-footer-item" :on-click clear} "Clear"]]])
