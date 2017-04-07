(ns trapecio.results)

(defn results-pane [last-row]
  [:div.pane.results
   [:h4 "Analytic Integral"]
   [:p "f(x) = 0.2x + 25x" [:sup "2"]
    "/2 - 200x" [:sup "3"]
    "/3 + 675x" [:sup "4"]
    "/4 - 900x" [:sup "5"]
    "/5 + 400x" [:sup "6"]
    "/6"]
   [:p.real (str "I = " (:real-integral @last-row))]
   [:h4 "Approximated Integration"]
   [:p.approx (str "I ≈ " (:integral @last-row))]
   [:h4 "The Error"]
   [:p.err (str "E = " (:error @last-row))]])