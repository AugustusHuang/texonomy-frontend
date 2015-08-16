(in-package :cl-user)
(defpackage texonomy-frontend
  (:use :cl :lucerne)
  (:export :app)
  (:documentation "Main texonomy-frontend code."))
(in-package :texonomy-frontend)
(annot:enable-annot-syntax)

;;; App

(defapp app
    :middlewares ((clack.middleware.static:<clack-middleware-static>
		   :path "/static/"
		   :root (asdf:system-relative-pathname :texonomy-frontend #p"assets/"))))

;;; Templates

(djula:add-template-directory
 (asdf:system-relative-pathname :texonomy-frontend #p"templates/"))

(defparameter +index+ (djula:compile-template* "index.html"))

;;; Views

@route app "/"
(defview index ()
  (render-template (+index+)))
