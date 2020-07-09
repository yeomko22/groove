package Models

import (
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Network"
)

type Tag struct {
	gorm.Model
	TagTrackId string `gorm:"type:varchar(50);"`
	TagName    string `gorm:"type:varchar(50);default:''"`
}

type TagCnt struct {
	TagName string `gorm:"type:varchar(50);default:''"`
	Cnt     int    `gorm:"type:int"`
}

func GetTags(tagCnts *[]TagCnt) (err error) {
	Network.DB.Raw("select tag_name, count(tag_name) as cnt " +
		"from tags group by tag_name order by cnt desc limit 100;").Scan(&tagCnts)
	return nil
}
