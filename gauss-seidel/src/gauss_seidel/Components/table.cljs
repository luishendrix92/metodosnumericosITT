(ns gauss-seidel.table
  (:require [gauss-seidel.appstate :refer [solution]]))

(defn sub-table [info]
  [:tr {:class "nested-row"}
   [:td {:class "nested-cell"} info]])

(defn row [[i xs errs]]
  [:tr {:key i}
   [:th (inc i)]
   [:td
    [:table
     [:tbody (map sub-table xs)]]]
   [:td
    [:table
     [:tbody (map sub-table errs)]]]])

(defn table []
  [:div {:class "column"}
   [:table {:class "table is-striped"}
    [:thead
     [:tr]
     [:tr
      [:th "Iteration"]
      [:th "Values of xₙ"]
      [:th "Errors of xₙ"]]]
    [:tbody (map row @solution)]]])
