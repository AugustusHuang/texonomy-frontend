
(defpackage :texonomy-frontend
  (:use :cl :weblocks :f-underscore :anaphora)
  (:import-from :hunchentoot
		:header-in
                :set-cookie
		:set-cookie*
		:cookie-in
                :user-agent
		:referer)
  (:documentation
   "Web application texonomy frontend based on Weblocks."))

(in-package :texonomy-frontend)

(export '(start-texonomy-frontend stop-texonomy-frontend))

;; A macro that generates a class or this webapp

(defwebapp texonomy-frontend
    :prefix "/"
    :description "texonomy-frontend"
    :init-user-session 'texonomy-frontend::init-user-session
    :autostart nil                   ;; have to start the app manually
    :ignore-default-dependencies nil ;; accept the defaults
    :debug t)

;; Top level start & stop scripts

(defun start-texonomy-frontend (&rest args)
  "Starts the application by calling 'start-weblocks' with appropriate
arguments."
  (apply #'start-weblocks args)
  (start-webapp 'texonomy-frontend))

(defun stop-texonomy-frontend ()
  "Stops the application by calling 'stop-weblocks'."
  (stop-webapp 'texonomy-frontend)
  (stop-weblocks))

