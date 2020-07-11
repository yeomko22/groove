package Models

import (
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Network"
)

type User struct {
	gorm.Model
	UserId               string `gorm:"unique;type:varchar(50);"`
	UserName             string `gorm:"type:varchar(50);default:''"`
	UserFullName         string `gorm:"type:varchar(50);default:''"`
	UserDescription      string `gorm:"type:varchar(1024);default:''"`
	UserCountry          string `gorm:"type:varchar(50);default:''"`
	UserCity             string `gorm:"type:varchar(50);default:''"`
	UserProfileOrg       string `gorm:"type:varchar(1024);default:''"`
	UserProfileThumbnail string `gorm:"type:varchar(1024);default:''"`
	UserBanner           string `gorm:"type:varchar(1024);default:''"`
	UserSid              int    `gorm:"unique;type:int"`
}

func GetAllUsers(user *[]User) (err error) {
	if err = Network.DB.Find(user).Error; err != nil {
		return err
	}
	return nil
}

func GetUserByID(user *User, userId string) (err error) {
	err = Network.DB.
		Where("user_id = ?", userId).
		First(user).
		Error
	if err != nil {
		return err
	}
	return nil
}

func CreateUser(user *User) (err error) {
	if err = Network.DB.Create(user).Error; err != nil {
		return err
	}
	return nil
}

func UpdateUser(user *User, id string) (err error) {
	Network.DB.Save(user)
	return nil
}

func DeleteUser(user *User, id string) (err error) {
	Network.DB.Where("id = ?", id).Delete(user)
	return nil
}
