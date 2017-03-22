(ns gauss-seidel.modals
  (:require [gauss-seidel.solver :refer [MAX-ITERATIONS substitute]]
            [gauss-seidel.appstate :refer [solution equations]]
            [gauss-seidel.events :refer [close-modal]]
            [gauss-seidel.parser :refer [parse-eq]]
            [clojure.string :refer [join]]
            [reagent.core :as r]))

(defn round-sol [xs]
  (map #(. % (toFixed 5)) xs))

(defn eq-tag [eq chosen]
  [:span {:class "tag is-info is-medium eq"
          :on-click #(reset! chosen (parse-eq eq))} eq])

(defn no-diag []
  [:div {:class "modal is-active"}
   [:div {:class "modal-background"}]
   [:div {:class "modal-card"}
    [:header {:class "modal-card-head"}
     [:p {:class "modal-card-title"} "No diagonal found"]
     [:button {:class "delete" :on-click (close-modal :no-diag)}]]
    [:section {:class "modal-card-body"}
     [:p "For the Gauss-Seidel method to work, you need to make sure your equations form a dominant diagonal. For example, if you were to have the following equation system:"]
     [:ol
      [:li "2x + 3y = 23"]
      [:li "5x - 2y = 12"]]
     [:p "You can observe that if you interchange their order, the first term in the first equation (5x) has the greatest coefficient. In the same way, the second term in the second equation (3y) also has the greatest coefficient. If your equations don't follow this rule, or if you have n terms in your equations but your system doesn't have exactly n equations, clear your system and start again!"]]]])

(defn bad-format []
  [:div {:class "modal is-active"}
   [:div {:class "modal-background"}]
   [:div {:class "modal-card"}
    [:header {:class "modal-card-head"}
     [:p {:class "modal-card-title"} "Bad equation format"]
     [:button {:class "delete" :on-click (close-modal :bad-format)}]]
    [:section {:class "modal-card-body"}
     [:p "The equation you wrote doesn't match the adequate format, this may cause the app to malfunction. The correct format that the app accepts is two or more terms, an equal sign and a positve or negative number (decimal or whole). A term consists of a sign (+-), a whole or decimal number and a letter; bear in mind that if the sign of the first term is +, the format isn't correct since it's not necessary to specify it unless it was a negative number."]]]])

(defn checker []
  (let [sol (-> @solution last (nth 1))
        chosen (r/atom {})]
    (fn []
      [:div {:class "modal is-active"}
       [:div {:class "modal-background"}]
       [:div {:class "modal-card"}
        [:header {:class "modal-card-head"}
         [:p {:class "modal-card-title"} "Check solution"]
         [:button {:class "delete" :on-click (close-modal :checker)}]]
        [:section {:class "modal-card-body"}
         [:p
          [:strong "Solution (rounded to 5 decimals): "]
          [:small (join ", " (round-sol sol))]]
         [:p "In which equation do you want to check this solution?"]
         (for [eq @equations]
           ^{:key eq} [eq-tag eq chosen])
         (when (seq @chosen)
           (let [expected (:indep @chosen)
                 result (->> (:comps @chosen) (substitute sol) (reduce +))
                 expected (:indep @chosen)
                 diff (- expected result)]
             [:div {:class "comparison"}
              [:h4 (str "Expected: " expected)]
              [:h4 (str "Obtained: " result)]
              [:h4 "Difference: " diff]]))]]])))

(defn max-iters []
  [:div {:class "modal is-active"}
   [:div {:class "modal-background"}]
   [:div {:class "modal-card"}
    [:header {:class "modal-card-head"}
     [:p {:class "modal-card-title"} "Maximum iterations reached"]
     [:button {:class "delete" :on-click (close-modal :max-iters)}]]
    [:section {:class "modal-card-body"}
     [:p (str "The maximum amount of iterations (" (+ MAX-ITERATIONS 2) ") was reached due to one of the following reasons:")]
     [:ol
      [:li "The system doesn't have a solution."]
      [:li "Due to floating point number issues, once the real solution is reached, it keeps alternating around 3 different (yet very very close) solutions. In this case, the last solution is valid."]
      [:li "The error was set to negative, please change it to 0 or more."]]]]])
