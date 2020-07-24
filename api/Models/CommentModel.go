package Models

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Network"
)

type Comment struct {
	gorm.Model
	CommentUserId     string `gorm:"type:varchar(255);default:''"`
	CommentUploaderId string `gorm:"type:varchar(255);default:''"`
	CommentTrackId    string `gorm:"type:varchar(255);default:''"`
	CommentBody       string `gorm:"type:varchar(4096);default:''"`
}

type CommentPagination struct {
	CreatedAt              string `json:"created_at"`
	CommentBody            string `json:"comment_body"`
	CommentUploaderId      string `json:"comment_uploader_id"`
	CommentUploaderProfile string `json:"comment_uploader_profile"`
}

func GetComment(comments *[]CommentPagination, trackId string, limit, offset int) error {
	join_sql := fmt.Sprintf("select A.created_at, A.comment_body, A.comment_uploader_id, "+
		"B.user_profile_thumbnail as comment_uploader_profile"+
		" from comments as A, users as B"+
		" where comment_track_id='%s'"+
		" and A.comment_uploader_id=B.user_id"+
		" order by A.created_at desc"+
		" limit %d offset %d",
		trackId, limit, offset)
	err := Network.DB.Raw(join_sql).Scan(comments).Error
	if err != nil {
		return err
	}
	return nil
}

func GetCommentCount(count *int, trackId string) error {
	err := Network.DB.
		Table("comments").
		Where("comment_track_id = ?", trackId).
		Count(count).
		Error
	fmt.Println("inside model", count)
	if err != nil {
		return err
	}
	return nil
}
