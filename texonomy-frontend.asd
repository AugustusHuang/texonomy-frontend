(defsystem texonomy-frontend
  :author "Huang Xuxing <augustushwang@gmail.com>"
  :maintainer "Huang Xuxing <augustushwang@gmail.com>"
  :license "MIT"
  :version "0.0.1"
  :homepage "https://github.com/AugustusHuang/texonomy-frontend"
  :bug-tracker "https://github.com/AugustusHuang/texonomy-frontend/issues"
  :source-control (:git "git@github.com:AugustusHuang/texonomy-frontend.git")
  :depends-on (:lucerne
               :drakma
	       :jonathan
	       :cl-gists)
  :defsystem-depends-on (:asdf-linguist)
  :components ((:module "assets"
			:components
			((:static-file "scripts.js")
			 (:static-file "font-awesome.min.css")
			 (:static-file "fontawesome-webfont.woff2")
			 (:static-file "respond.min.js")
			 (:static-file "FontAwesome.otf")
			 (:static-file "html5shiv.js")
			 (:static-file "fontawesome-webfont.eot")
			 (:static-file "fontawesome-webfont.svg")
			 (:static-file "fontawesome-webfont.ttf")
			 (:static-file "fontawesome-webfont.woff")
			 (:static-file "ie9.css")
			 (:static-file "skel.min.js")
			 (:static-file "jquery.min.js")
			 (:static-file "util.js")
			 (:static-file "main.css")
			 (:static-file "main.js")))
               (:module "src"
                :serial t
                :components
                ((:file "texonomy-frontend"))))
  :description "Front-end of an online tex symbol recognition project."
  :long-description
  #.(uiop:read-file-string
     (uiop:subpathname *load-pathname* "README.md"))
  :in-order-to ((test-op (test-op texonomy-frontend-test))))
