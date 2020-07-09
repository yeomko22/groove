package Network

import (
	"errors"
	"fmt"
	"os"
	"strconv"

	"github.com/jinzhu/gorm"
)

var DB *gorm.DB

type DBConfig struct {
	Host     string
	Port     int
	User     string
	Password string
	DBName   string
}

func BuildDBConfig() (*DBConfig, error) {
	dbhost := os.Getenv("GROOVE_DBHOST")
	dbport := os.Getenv("GROOVE_DBPORT")
	dbuser := os.Getenv("GROOVE_DBUSER")
	dbpassword := os.Getenv("GROOVE_DBPASSWORD")
	dbname := os.Getenv("GROOVE_DBNAME")
	if dbhost == "" || dbport == "" || dbuser == "" || dbpassword == "" || dbname == "" {
		return nil, errors.New("no environment variables")
	}
	dbportNum, err := strconv.Atoi(dbport)
	if err != nil {
		return nil, errors.New("invalid dbport")
	}
	dbConfig := DBConfig{
		Host:     dbhost,
		Port:     dbportNum,
		User:     dbuser,
		Password: dbpassword,
		DBName:   dbname,
	}
	return &dbConfig, nil
}

func DBURL(dbConfig *DBConfig) string {
	return fmt.Sprintf(
		"%s:%s@tcp(%s:%d)/%s?charset=utf8&parseTime=True&loc=Local",
		dbConfig.User,
		dbConfig.Password,
		dbConfig.Host,
		dbConfig.Port,
		dbConfig.DBName,
	)
}
