(ns trapecio.core
  (:require [trapecio.sidebar :refer [sidebar]]
            [trapecio.results :refer [results-pane]]
            [trapecio.table   :refer [table]]
            [reagent.core     :as    r]))

(defn app []
  (let [state (r/atom {})]
    (fn []
      [:div.pane-group
       [sidebar state]
       [results-pane state]
       [table state]])))

(r/render [app] (js/document.getElementById "app"))