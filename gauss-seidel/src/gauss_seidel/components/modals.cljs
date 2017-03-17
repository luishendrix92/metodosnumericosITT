(ns gauss-seidel.modals)

(defn no-diag []
  [:div {:class "modal"}
   [:div {:class "modal-background"}]
   [:div {:class "modal-card"}
    [:header {:class "modal-card-head"}
     [:p {:class "modal-card-title"} "No diagonal found"]
     [:button {:class "delete"}]]
    [:section {:class "modal-card-body"}
     [:p "Hello world, you, cruel world."]]]])