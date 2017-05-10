(ns lineari.helpers
  (:require [clojure.string :refer [split]]))

(def ROOT_DIR "src/lineari/")

;; Returns the first element in a collection that satisfies a predicate.
;; first-match :: (a -> Boolean) -> Collection a -> Maybe a
(defn first-match [predicate collection]
  (or (first (drop-while (complement predicate) collection)) :nothing))

;; Takes a filename and attempts to read the specified file
;; after searching for it in this very directory.
;; file-lines :: String -> <IO Read> List String
(defn file-lines [filename]
  (-> (str ROOT_DIR filename) slurp (split #"\n")))

;; Takes a list of lines (strings) and attempts to parse each numeric
;; value written in it separated by whitespace in each line as floats.
;; parse-values :: <IO Read> List String -> List List Float
(defn parse-values [lines]
  (let [parse-nums (partial map read-string)
        get-nums    #(split % #"\s+")]
    (map (comp parse-nums get-nums) lines)))

;; type alias Maybe a :: a | Nothing
