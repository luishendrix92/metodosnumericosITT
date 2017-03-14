(ns sistemaecdos.core
  (:require [sistemaecdos.parser :refer [parse-eq]]))

(enable-console-print!)

(println (parse-eq "2x + 5y = 1234"))