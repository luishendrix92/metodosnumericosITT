(ns gauss-seidel.table
  (:require [gauss-seidel.appstate :refer [solution]]))

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
    [:tbody (map row @solution)]]])