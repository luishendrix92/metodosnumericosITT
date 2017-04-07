(ns trapecio.core
  (:require [trapecio.method :refer [solve-integral]]))

(enable-console-print!)

(println
  (solve-integral 0 0.8 2))
