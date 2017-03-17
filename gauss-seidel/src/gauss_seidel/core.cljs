(ns gauss-seidel.core
  (:require [gauss-seidel.parser :refer [parse-eq]]
            [gauss-seidel.system :refer [make-diagonal]]
            [gauss-seidel.solver :refer [solve-system]]
            [gauss-seidel.modals :refer [no-diag]]
            [reagent.core :as r]))

(enable-console-print!)

(defonce state (r/atom {:equations []
                        :error 0.01
                        :solution []}))

(defn show-solution [event]
  (let [diagonal (->> (:equations @state)
                      (map parse-eq)
                      make-diagonal)]
    (case diagonal
      :nothing (js/alert "Couldn't assemble a correct diagonal from the equations you provided")
      (swap! state assoc
             :solution
             (solve-system (:error @state) diagonal)))))

(defn update-error [event]
  (let [err (js/document.getElementById "err")]
    (swap! state assoc :error (-> err .-value js/parseFloat))
    (set! (.-value err) "")))

(defn add-equation [event]
  (let [eq (js/document.getElementById "eq")]
    (swap! state update-in [:equations] #(conj % (.-value eq)))
    (set! (.-value eq) "")))

(defn clear-system [event]
  (swap! state assoc :equations [] :solution []))

(defn row [[i xs errs]]
  [:tr {:key i}
   [:th (inc i)]
   [:td [:table
         [:tbody (for [x xs]
                   [:tr {:class "nested-row"}
                    [:td {:class "nested-cell"} x]])]]]
   [:td [:table
         [:tbody (for [err errs]
                   [:tr {:class "nested-row"}
                    [:td {:class "nested-cell"} err]])]]]])

(defn table []
  [:div {:class "column"}
   [:table {:class "table is-striped"}
    [:thead
     [:tr (for [col ["Iteration"
                     "Values of xₙ"
                     "Errors of xₙ"]]
            [:th col])]]
    [:tbody (map row (:solution @state))]]])

(defn equation-list []
  [:div {:class "card eq-list"}
   [:header {:class "card-header"}
    [:p {:class "card-header-title"} "Equation List"]]
   [:div {:class "card-content"}
    [:div {:class "content"}
     [:p {:class "welcome"} "The following equations will go through a solving-attempt process, bear in mind that the equation system may or may not have a solution:"]
     [:ul (for [equation (:equations @state)]
            [:li equation])]]]
   [:footer {:class "card-footer"}
    [:a {:class "card-footer-item" :on-click show-solution} "Solve"]
    [:a {:class "card-footer-item" :on-click #()} "Check"]
    [:a {:class "card-footer-item" :on-click clear-system} "Clear"]]])

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
    [:label {:class "label"} (str "Current maximum error: " (:error @state))]
    [:div {:class "field has-addons"}
     [:p {:class "control"}
      [:input {:placeholder "Type in a valid tolerance"
               :class "input" :id "err"
               :type "text"}]]
     [:p {:class "control"}
      [:a {:class "button is-info" :on-click update-error} "Update"]]]]
   [equation-list]])

(defn app []
  [:div {:class "columns"}
   [no-diag]
   [sidebar]
   [table]])

(r/render [app] (js/document.getElementById "app"))