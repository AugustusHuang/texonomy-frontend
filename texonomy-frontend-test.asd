(defsystem texonomy-frontend-test
  :author "Huang Xuxing <augustushwang@gmail.com>"
  :license "MIT"
  :description "Tests for texonomy-frontend."
  :depends-on (:texonomy-frontend
               :fiveam)
  :components ((:module "t"
                :serial t
                :components
                ((:file "texonomy-frontend")))))
