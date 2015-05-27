/*package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"log"
	"os"
	"fmt"
)

func Static(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	http.ServeFile(w,r,"./static/"+ps.ByName("file"))
}

func main() {
	router := httprouter.New()
	router.GET("/*file", Static)
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	fmt.Printf("Starting server at localhost:%s...", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}*/

package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("static")))
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	log.Printf("Listening on port %s...", port)
	http.ListenAndServe(":"+port, nil)
}