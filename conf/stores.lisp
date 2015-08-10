
(in-package :texonomy-frontend)

;;; Multiple stores may be defined. The last defined store will be the
;;; default.
(defstore *texonomy-frontend-store* :prevalence
  (merge-pathnames (make-pathname :directory '(:relative "data"))
                   (asdf-system-directory :texonomy-frontend)))

