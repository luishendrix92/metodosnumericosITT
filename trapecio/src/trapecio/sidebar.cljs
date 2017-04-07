(ns trapecio.sidebar
  (:require [trapecio.method  :refer [solve-integral make-table]]))

(defn parse-val [query]
  (-> query js/document.querySelector .-value js/parseFloat))

(defn update-state [last-row res-table]
  (fn [event]
    (let [start (parse-val ".a")
          end   (parse-val ".b")
          m-seg (parse-val ".n")
          spec  (parse-val ".e")]
      (reset! last-row (solve-integral start end m-seg))
      (reset! res-table (make-table start end m-seg spec)))))

(defn put-defaults [event]
  (set! (.-value (js/document.querySelector ".a")) "0")
  (set! (.-value (js/document.querySelector ".b")) "0.8")
  (set! (.-value (js/document.querySelector ".n")) "20")
  (set! (.-value (js/document.querySelector ".e")) "5"))

(defn sidebar [last-row res-table]
  [:div.pane-sm.sidebar
   [:form
    [:div.form-group
     [:label "Maximum segments"]
     [:input.form-control.n {:type "number"
                             :min "2" :max "1000" :step "2"
                             :placeholder "From 2 to 1000"}]]
    [:div.form-group
     [:label "Start (a)"]
     [:input.form-control.a {:type "text"
                             :placeholder "First x axis value"}]]
    [:div.form-group
     [:label "End (b)"]
     [:input.form-control.b {:type "text"
                             :placeholder "Last x axis value"}]]
    [:div.form-group
     [:label "Expected error"]
     [:input.form-control.e {:type "text"
                             :placeholder "Spec percentual error"}]]]
   [:div.btn-group
    [:button.btn.btn-form.btn-default
     {:on-click put-defaults}
     "Defaults"]
    [:button.btn.btn-form.btn-primary
     {:on-click (update-state last-row res-table)}
     "Integrate"]]])
