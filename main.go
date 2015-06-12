package main

import (
	"net/http"
	"os"
	"log"
	"github.com/ranveerkunal/memfs"
)

func main() {
	fs, err := memfs.New("./static/")
	if err != nil {
		log.Fatalf("Failed to create memfs: %s err: %v", "./static/", err)
	}

	http.Handle("/", http.FileServer(fs))
	http.ListenAndServe(":"+os.Getenv("PORT"), nil)
}