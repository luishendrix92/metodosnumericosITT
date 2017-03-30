(ns biseccion.core-test
  (:require [clojure.test :refer :all]
            [biseccion.metodo :refer [funcion]]))

(deftest a-test
  (testing "Función correcta"
    (is (= (funcion 4) 24))))