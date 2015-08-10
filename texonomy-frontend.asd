(in-package :asdf-user)

(defsystem texonomy-frontend
    :name "texonomy-frontend"
    :version "0.0.0"
    :maintainer "Huang Xuxing"
    :author "Huang Xuxing"
    :licence "MIT"
    :description "Frontend of texonomy."
    :depends-on (:weblocks)
    :components ((:file "packages")
                 (:module conf
			  :components ((:file "stores")
				       )
			  :depends-on ("packages"))
                 (:module src
			  :components ((:file "init-session")
				       )
			  :depends-on ("packages" conf))))

