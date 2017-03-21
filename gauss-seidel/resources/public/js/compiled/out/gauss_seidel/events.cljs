(ns gauss-seidel.events
  (:require [gauss-seidel.parser :refer [eq-pattern whitespace]]
            [gauss-seidel.system :refer [make-diagonal]]
            [gauss-seidel.solver :refer [MAX-ITERATIONS]]
            [gauss-seidel.solver :refer [solve-system]]
            [gauss-seidel.parser :refer [parse-eq]]
            [gauss-seidel.appstate :refer [equations error
                                           solution  modal-state]]))

(defn open-modal [target-modal]
  (fn []
    (swap! modal-state assoc target-modal true)))

(defn close-modal [target-modal]
  (fn []
    (swap! modal-state assoc target-modal false)))

(defn show-solution [event]
  (let [diagonal (->> @equations (map parse-eq) make-diagonal)]
    (case diagonal
      :nothing ((open-modal :no-diag))
      (do
        (reset! solution (solve-system @error diagonal))
        (when (= (-> @solution last first dec)
                 MAX-ITERATIONS)
          ((open-modal :max-iters)))))))

(defn update-error [event]
  (let [err (js/document.getElementById "err")]
    (reset! error (-> err .-value js/parseFloat))
    (set! (.-value err) "")))

(defn add-equation [event]
  (let [eq (js/document.getElementById "eq")
        eq-clean (-> eq .-value (clojure.string/replace whitespace ""))]
    (if-not (re-matches eq-pattern eq-clean)
      ((open-modal :bad-format))
      (do
        (swap! equations conj (.-value eq))
        (set! (.-value eq) "")))))

(defn clear [event]
  (reset! solution [])
  (reset! equations []))