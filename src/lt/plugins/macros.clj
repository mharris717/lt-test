(ns lt.plugins.lt-test.macros)


(def values {:a (fn [] 1)
             :b (fn [] 2)
             :ed (fn []
                   (let [ed ()]))
             })

(defmacro let-ed [[k & vars] & body]
  (if k
    `(let [~k (((keyword '~k) values))] (let-vars ~vars ~@body))
    `(let [] ~@body)))

(defmacro deftest-ed [name ed & body]
  `(~'deftest ~name
    (let-ed ~ed
      (lt.plugins.lt-test/trigger-editor ~ed)
       ~@body)))
