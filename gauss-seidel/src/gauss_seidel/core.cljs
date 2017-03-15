(ns gauss-seidel.core
  (:require [gauss-seidel.parser :refer [parse-eq]]
            [gauss-seidel.system :refer [make-diagonal]]))

(enable-console-print!)

(def samples ["3x - 0.1y - 0.2z = 7.85"
              "0.3x - 0.2y + 10z = 71.4"
              "0.1x + 7y - 0.3z = -19.3"])

(println (make-diagonal (map parse-eq samples)))