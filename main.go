package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"log"
	"os"
	"io"
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
}