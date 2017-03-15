(ns gauss-seidel.core
  (:require [gauss-seidel.parser :refer [parse-eq]]
            [gauss-seidel.system :refer [make-diagonal]]
            [gauss-seidel.solver :refer [solve-system compute-xs isolate compute-errs acceptable-error?]]
            [gauss-seidel.helpers :refer [filled-range zip map-index]]))

(enable-console-print!)

(def samples ["3x - 0.1y - 0.2z = 7.85"
              "0.3x - 0.2y + 10z = 71.4"
              "0.1x + 7y - 0.3z = -19.3"])
(def diago [{:comps '(3 -0.1 -0.2) :indep 7.85}
            {:comps '(0.1 7 -0.3) :indep -19.3}
            {:comps '(0.3 -0.2 10) :indep 71.4}])

(println (->> samples
              (map parse-eq)
              make-diagonal
              (solve-system 0.01)))
