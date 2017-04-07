(ns trapecio.sidebar
  (:require [trapecio.method  :refer [solve-integral]]))

(defn parse-val [query]
  (-> query js/document.querySelector .-value js/parseFloat))

(defn update-state [state]
  (fn [event]
    (let [start (parse-val ".a")
          end   (parse-val ".b")
          n-seg (parse-val ".n")]
      (reset! state (solve-integral start end n-seg)))))

(defn put-defaults [event]
  (set! (.-value (js/document.querySelector ".a")) "0")
  (set! (.-value (js/document.querySelector ".b")) "0.8")
  (set! (.-value (js/document.querySelector ".n")) "2"))

(defn sidebar [state]
  [:div.pane-sm.sidebar
   [:form
    [:div.form-group
     [:label "Number of segments"]
     [:input.form-control.n {:type "number"
                             :min "2" :max "1000"
                             :placeholder "From 2 to 1000"}]]
    [:div.form-group
     [:label "Start (a)"]
     [:input.form-control.a {:type "text"
                             :placeholder "First x axis value"}]]
    [:div.form-group
     [:label "End (b)"]
     [:input.form-control.b {:type "text"
                             :placeholder "Last x axis value"}]]]
   [:div.btn-group
    [:button.btn.btn-form.btn-default {:on-click put-defaults} "Defaults"]
    [:button.btn.btn-form.btn-primary {:on-click (update-state state)} "Integrate"]]])
