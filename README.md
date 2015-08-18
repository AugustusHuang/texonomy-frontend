# texonomy-frontend
Frontend of texonomy.

## Requirements
A Common Lisp environment, e.g. [SBCL](http://www.sbcl.org)  
[quicklisp](https://www.quicklisp.org/beta/)  
[lucerne](http://eudoxia.me/lucerne/) or directly install in quicklisp by entering `(ql:quickload :lucerne)`

## Installation
In SBCL (or other current Common Lisp implementation):

    CL-USER> (ql:quickload :lucerne)
	CL-USER> (ql:quickload :texonomy-frontend)
	CL-USER> (lucerne:start texonomy-frontend:app :port XXXX)

Here XXXX will be your prefered port number, whether system port will run or
not may depend on the server, so don't try it unless you have to.
