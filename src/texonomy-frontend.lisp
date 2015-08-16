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

;(defparameter +recognize+ (djula:compile-template* "recognize.html"))

;(defparameter +report+ (djula:compile-template* "report.html"))

;;; Views

@route app "/"
(defview index ()
  (render-template (+index+)))

;@route app "/recognize"
;(defview recognize ()
;  (render-template (+recognize+)))

;@route app (:post "/snapshot")
;(defview snapshot ()
;  (if ()
      ;; Succeed. Save the snapshot and redirect to index.html.
;      (progn
;	(redirect "/"))
      ;; Failed. Tell the user with a pop-up window and redirect to index.html.
;      (progn
;	(redirect "/"))))

;@route app "/report"
;(defview report ()
;  (render-template (+report+)))

