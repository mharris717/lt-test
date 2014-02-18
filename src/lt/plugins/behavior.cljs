(ns lt.plugins.lt-test.behavior
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.plugins :as plugins]
            [lt.util.dom :as dom]
            [lt.objs.command :as cmd]))

(def behavior-logs (atom []))
(defn add-behavior-log! [name]
  (swap! behavior-logs concat [name]))
(defn clear-behavior-logs! []
  (swap! behavior-logs (fn [x] [])))
(defn get-behavior-logs []
  @behavior-logs)

(defn make-logged-behavior! [name]
  (let [b (@object/behaviors name)
        reaction (:reaction b)
        logged-reaction (fn [& rest]

                          (add-behavior-log! name)
                          (apply reaction rest))
        logged-behavior (assoc b :unlogged-reaction reaction
                                 :reaction logged-reaction
                                 :logged-reaction true)]
    (if (not (:logged-reaction b))
      (swap! object/behaviors #(assoc % name logged-behavior)))))

(defn setup-logged-behaviors! [plugin]
  (let [all (keys @object/behaviors)
       mine (filter #(part-of-plugin? % plugin) all)]

    (for [k mine]
      (make-logged-behavior! k))))

(defn part-of-plugin? [name plugin]
  (if (re-find (re-pattern plugin) name)
    true
    false))
