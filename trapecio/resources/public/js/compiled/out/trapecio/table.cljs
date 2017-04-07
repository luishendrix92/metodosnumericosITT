(ns trapecio.table)

(defn table [state]
  [:div.pane
   [:table.table-striped
    [:thead
     [:tr
      [:th "X" [:sub "i"]]
      [:th "f(x" [:sub "i"] ") evaluated"]
      [:th "Ef(x" [:sub "i"] ")"]]]
    [:tbody (for [[i fxi] (map-indexed vector (:segments @state))]
              (when (or (odd? i))
                ^{:key i} [:tr
                           [:td (inc i)]
                           [:td fxi]
                           [:td (- (:real-integral @state) fxi)]]))]]])