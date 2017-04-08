(ns trapecio.table)

(defn table [res-table]
  [:div.pane
   [:table.table-striped
    [:thead
     [:tr
      [:th "n"]
      [:th "Approx Value"]
      [:th "Err"]
      [:th "Err %"]]]
    [:tbody (for [[i val err errp] @res-table]
              ^{:key i} [:tr
                         [:td i]
                         [:td val]
                         [:td err]
                         [:td (str errp " %")]])]]])