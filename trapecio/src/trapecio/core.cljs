(ns trapecio.core
  (:require [trapecio.sidebar :refer [sidebar]]
            [trapecio.results :refer [results-pane]]
            [trapecio.table   :refer [table]]
            [reagent.core     :as    r]))

(defn app []
  (let [res-table (r/atom [])
        last-row  (r/atom {})]
    (fn []
      [:div.pane-group
       [sidebar last-row res-table]
       [results-pane last-row]
       [table res-table]])))

(r/render [app] (js/document.getElementById "app"))