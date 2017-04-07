(ns trapecio.table)

(defn row [i fxi]
  ^{:key i} [:tr
             [:td (inc i)]
             [:td fxi]])

(defn table [state]
  [:div.pane
   [:table.table-striped
    [:thead
     [:tr
      [:th "X" [:sub "i"]]
      [:th "f(x" [:sub "i"] ") evaluated"]]]
    [:tbody (map-indexed row (:segments @state))]]])