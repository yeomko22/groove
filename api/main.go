package main

import (
	"log"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Models"
	"github.com/yeomko22/groove/api/Network"
	"github.com/yeomko22/groove/api/Routes"
)

func main() {
	dbconfig, err := Network.BuildDBConfig()
	if err != nil {
		log.Fatal(err)
	}
	Network.DB, err = gorm.Open("mysql", Network.DBURL(dbconfig))
	if err != nil {
		log.Fatal(err)
	}
	defer Network.DB.Close()
	Network.DB.AutoMigrate(&Models.Test{})
	Network.DB.AutoMigrate(&Models.User{})
	Network.DB.AutoMigrate(&Models.Track{})
	r := Routes.SetUpRouter()
	r.Run(":8080")
	log.Println("groove api runs on port 8080")
}
