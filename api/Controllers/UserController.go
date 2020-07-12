package Controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Models"
)

func GetUsers(c *gin.Context) {
	var user []Models.User
	err := Models.GetAllUsers(&user)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, user)
	}
}

func CreateUser(c *gin.Context) {
	var user Models.User
	c.BindJSON(&user)
	err := Models.CreateUser(&user)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, user)
	}
}

// @Router /users/:userId [get]
// @Description userid 값에 해당하는 유저 정보를 읽어옴
// @Param userId path string true "userId"
// @Success 200 {object} Models.UserResponse
// @Tags users
func GetUserByID(c *gin.Context) {
	userId := c.Params.ByName("id")
	var user Models.User
	err := Models.GetUserByID(&user, userId)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewUserResponse(http.StatusOK, user))
	}
}

func DeleteUser(c *gin.Context) {
	var user Models.User
	id := c.Params.ByName("id")
	err := Models.DeleteUser(&user, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"id" + id: "is deleted"})
	}
}
