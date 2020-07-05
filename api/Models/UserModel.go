package Models

import (
	"fmt"
	"github.com/yeomko22/groove/api/Config"
)

type User struct {
	UserId               uint   `gorm:"unique;type:varchar(50)"`
	UserName             string `gorm:"type:varchar(50)"`
	UserFullName         string `gorm:"type:varchar(50)"`
	UserDescription      string `gorm:"type:text"`
	UserCountry          string `gorm:"type:varchar(50)"`
	UserCity             string `gorm:"type:varchar(50)"`
	UserProfileOrg       string `gorm:"type:varchar(1024)"`
	UserProfileThumbnail string `gorm:"type:varchar(1024)"`
	UserBanner           string `gorm:"type:varchar(1024)"`
	UserSid              int    `gorm:"type:int"`
}

func GetAllUsers(user *[]User) (err error) {
	if err = Config.DB.Find(user).Error; err != nil {
		return err
	}
	return nil
}

func GetUserByID(user *User, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(user).Error; err != nil {
		return err
	}
	return nil
}

func CreateUser(user *User) (err error) {
	if err = Config.DB.Create(user).Error; err != nil {
		return err
	}
	return nil
}

func UpdateUser(user *User, id string) (err error) {
	fmt.Println(user)
	Config.DB.Save(user)
	return nil
}

func DeleteUser(user *User, id string) (err error) {
	Config.DB.Where("id = ?", id).Delete(user)
	return nil
}

func (b *User) TableName() string {
	return "user"
}
