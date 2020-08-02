package Models

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Network"
	"log"
)

type Track struct {
	gorm.Model
	TrackId                   string `gorm:"unique;type:varchar(50);"`
	TrackUserSid              string `gorm:"type:varchar(50)"`
	TrackUserId               string `gorm:"type:varchar(50)"`
	TrackUserName             string `gorm:"type:varchar(50)"`
	TrackTitle                string `gorm:"type:varchar(255);default:''"`
	TrackDescription          string `gorm:"type:varchar(4096);default:''"`
	TrackDuration             int    `gorm:"type:int;default:0"`
	TrackGenre                string `gorm:"type:varchar(50);default:''"`
	TrackArtwork              string `gorm:"type:varchar(1024);default:''"`
	TrackArtworkThumbnail     string `gorm:"type:varchar(1024);default:''"`
	TrackUserProfile          string `gorm:"type:varchar(1024);default:''"`
	TrackUserProfileThumbnail string `gorm:"type:varchar(1024);default:''"`
	TrackHls                  string `gorm:"type:varchar(1024);default:''"`
	TrackPermalink            string `gorm:"type:varchar(1024);default:''"`
	TrackLikesCount           int    `gorm:"type:int;default:0"`
	TrackPlaybackCount        int    `gorm:"type:int;default:0"`
	TrackColor        		  string `gorm:"type:varchar(50);default:''"`
}

type Genre struct {
	TrackGenre string `gorm:"type:varchar(50);default:''"`
	Cnt        int    `gorm:"type:int"`
}

type IncreaseTrackField struct {
	TrackId string `json:"track_id"`
	Field   string `json:"field"`
}

func GetTrackById(trackId string, track *Track) (err error) {
	err = Network.DB.
		Where("track_id = ?", trackId).
		Find(&track).
		Error
	if err != nil {
		return err
	}
	return nil
}

func GetTrackByGenre(tracks *[]Track, genre string) (err error) {
	err = Network.DB.
		Where("track_genre = ?", genre).
		Find(tracks).
		Error
	if err != nil {
		return err
	}
	return nil
}

func GetTrackGenres(genres *[]Genre) (err error) {
	err = Network.DB.Raw("select track_genre, count(*) as cnt " +
		"from tracks where track_genre!='' group by track_genre order by cnt desc limit 100;").
		Scan(&genres).
		Error
	if err != nil {
		return err
	}
	return nil
}

func GetTrackByTag(tracks *[]Track, query string) (err error) {
	query = "%" + query + "%"
	join_sql := fmt.Sprintf("select a.* "+
		"from tracks as a,"+
		" (select distinct tag_track_id from tags where tag_name like '%s') as b "+
		"where a.track_id=b.tag_track_id "+
		"order by a.track_likes_count desc "+
		"limit 10;", query)
	err = Network.DB.Raw(join_sql).Scan(tracks).Error
	if err != nil {
		return err
	}
	return nil
}

func GetTrackNewest(tracks *[]Track) (err error) {
	err = Network.DB.
		Order("created_at desc").
		Limit(10).
		Find(tracks).
		Error
	if err != nil {
		return err
	}
	return nil
}

func GetTrackHottest(tracks *[]Track) (err error) {
	err = Network.DB.
		Order("track_likes_count desc").
		Limit(10).
		Find(tracks).
		Error
	if err != nil {
		return err
	}
	return nil
}

// option
// 1: newest track
// 2: most liked
// 3: most played
func GetTrackByUser(tracks *[]Track, userId string, option, limit, offset int) (err error) {
	var order string
	switch option {
	case 1:
		order = "created_at desc"
	case 2:
		order = "track_likes_count desc"
	case 3:
		order = "track_playback_count desc"
	}
	err = Network.DB.Table("tracks").
		Where("track_user_id = ?", userId).
		Order(order).
		Offset(offset).
		Limit(limit).
		Find(tracks).
		Error
	if err != nil {
		return err
	}
	return nil
}

func GetTrackByUserCount(count *int, userId string) (err error) {
	err = Network.DB.Table("tracks").
		Where("track_user_id = ?", userId).
		Count(count).
		Error
	if err != nil {
		return err
	}
	return nil
}

func IncreaseTrackPlayback(increaseTrackField IncreaseTrackField, track *Track) (err error) {
	err = GetTrackById(increaseTrackField.TrackId, track)
	if err != nil {
		return err
	}
	updateColumn := ""
	updateValue := 0
	switch increaseTrackField.Field {
	case "playback":
		updateColumn = "track_playback_count"
		updateValue = track.TrackPlaybackCount + 1
	case "likes":
		updateColumn = "track_likes_count"
		updateValue = track.TrackLikesCount + 1
	}
	err = Network.DB.Model(track).UpdateColumn(updateColumn, updateValue).Error
	if err != nil {
		log.Println(err)
		return err
	}
	return nil
}
