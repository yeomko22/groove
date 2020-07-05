package main

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Config"
	"github.com/yeomko22/groove/api/Models"
	"github.com/yeomko22/groove/api/Routes"
	"log"
)

var err error

func main() {
	dbconfig, err := Config.BuildDBConfig()
	if err != nil {
		log.Fatal(err)
	}
	Config.DB, err = gorm.Open("mysql", Config.DBURL(dbconfig))
	if err != nil {
		log.Fatal(err)
	}
	defer Config.DB.Close()
	Config.DB.AutoMigrate(&Models.Test{})
	r := Routes.SetUpRouter()
	r.Run()
}
