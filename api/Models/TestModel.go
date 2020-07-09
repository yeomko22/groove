package Models

import (
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Network"
)

type Test struct {
	gorm.Model
	Num  int    `gorm:"type:int"`
	Name string `gorm:"type:varchar(50)"`
}

func GetAllTest(test *[]Test) (err error) {
	if err = Network.DB.Find(test).Error; err != nil {
		return err
	}
	return nil
}

func GetTestByID(test *Test, id string) (err error) {
	if err = Network.DB.Where("id = ?", id).First(test).Error; err != nil {
		return err
	}
	return nil
}

func CreateTest(test *Test) (err error) {
	if err = Network.DB.Create(test).Error; err != nil {
		return err
	}
	return nil
}

func UpdateTest(test *Test, id string) (err error) {
	Network.DB.Save(test)
	return nil
}

func DeleteTest(test *Test, id string) (err error) {
	Network.DB.Where("id = ?", id).Delete(test)
	return nil
}
