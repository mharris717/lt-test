(ns lt.plugins.lt-test
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd])

  (:require-macros [lt.plugins.lt-test.macros :refer [deftest-ed]]))

(def tests (atom {}))
(defn clear! []
  (swap! tests (fn [x] {})))

(defn deftest [name form]
  (swap! tests #(assoc % name form))
  form)

(defn is [form] form)

(defn is= [a b]
  (if (= a b)
    true
    [a b]))

(defn failures []
  (let [res (filter (fn [[k,v]] (not= v true) ) @tests)]
    (if (> (count res) 0)
      (println "Failures:")
      (println "Success!"))
    (count (map #(println %) res))
    res))

'(deftest-ed "thing" [ed]
  (is= 2 3))
