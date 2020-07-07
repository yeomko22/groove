package Models

import "github.com/jinzhu/gorm"

type Track struct {
	gorm.Model
	TrackId          uint   `gorm:"unique;type:varchar(50);"`
	TrackUserSid     string `gorm:"type:varchar(50)"`
	TrackTitle       string `gorm:"type:varchar(50);default:''"`
	TrackDescription string `gorm:"type:varchar(4096);default:''"`
	TrackDuration    int    `gorm:"type:int;default:0"`
	TrackGenre       string `gorm:"type:varchar(50);default:''"`
	TrackArtwork     string `gorm:"type:varchar(1024);default:''"`
	TrackArtworkThumbnail     string `gorm:"type:varchar(1024);default:''"`
	TrackHls	 	 string `gorm:"type:varchar(1024);default:''"`
	TrackM3u8Url	 string `gorm:"type:varchar(1024);default:''"`
}
