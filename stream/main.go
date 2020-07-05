package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	const songDir = "samples"
	const port = 8090
	http.Handle("/", addHeaders(http.FileServer(http.Dir(songDir))))
	fmt.Printf("Starting server on %v\n", port)
	log.Printf("Serving %s on HTTP port: %v\n", songDir, port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), nil))
}

func addHeaders(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		h.ServeHTTP(w, r)
	}
}
