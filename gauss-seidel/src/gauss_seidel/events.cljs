(ns gauss-seidel.events
  (:require [gauss-seidel.appstate :refer [equations error solution]]
            [gauss-seidel.system :refer [make-diagonal]]
            [gauss-seidel.solver :refer [solve-system]]
            [gauss-seidel.parser :refer [parse-eq]]))

(defn show-solution [event]
  (let [diagonal (->> @equations (map parse-eq) make-diagonal)]
    (case diagonal
      :nothing (js/alert "Couldn't assemble a correct diagonal from the equations you provided")
      (reset! solution (solve-system @error diagonal)))))

(defn update-error [event]
  (let [err (js/document.getElementById "err")]
    (reset! error (-> err .-value js/parseFloat))
    (set! (.-value err) "")))

(defn add-equation [event]
  (let [eq (js/document.getElementById "eq")]
    (swap! equations conj (.-value eq))
    (set! (.-value eq) "")))

(defn clear-system [event]
  (reset! solution [])
  (reset! equations []))