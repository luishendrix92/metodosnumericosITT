(ns lineari.ioparser
  (:require [clojure.string :refer [split trim join]]))

(def ROOT_DIR "src/lineari/")

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
        get-nums   #(split % #"\s+")]
    (map (comp parse-nums get-nums trim) lines)))

;; Joins a list of string file lines and appends a new line at the end.
;; assemble-file :: List String -> String
(defn assemble-file [data]
  (str (join "\n" data) "\n"))
