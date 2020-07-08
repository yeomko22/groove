package Models

import "github.com/jinzhu/gorm"

type Tag struct {
	gorm.Model
	TagTrackId string `gorm:"type:varchar(50);"`
	TagName    string `gorm:"type:varchar(50);default:''"`
}
