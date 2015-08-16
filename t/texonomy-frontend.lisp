(in-package :cl-user)
(defpackage texonomy-frontend-test
  (:use :cl :fiveam))
(in-package :texonomy-frontend-test)

(def-suite tests
  :description "texonomy-frontend tests.")
(in-suite tests)

(test simple-test
  (is
   (equal 1 1))
  (is-true
   (and t t)))

(run! 'tests)
