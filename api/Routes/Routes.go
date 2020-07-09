package Routes

import (
	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Controllers"
)

func SetUpRouter() *gin.Engine {
	r := gin.Default()
	v1 := r.Group("/api")
	{
		grp0 := v1.Group("/")
		{
			grp0.GET("/", Controllers.GetHealth)
		}
		grp1 := v1.Group("/test")
		{
			grp1.GET("/", Controllers.GetTests)
			grp1.POST("/", Controllers.CreateTest)
			grp1.GET("/:id", Controllers.GetTestByID)
			grp1.PUT("/:id", Controllers.UpdateTest)
			grp1.DELETE("/:id", Controllers.DeleteTest)
		}
		grp2 := v1.Group("/user")
		{
			grp2.GET("/", Controllers.GetUsers)
			grp2.POST("/", Controllers.CreateUser)
			grp2.GET("/:id", Controllers.GetUserByID)
			grp2.PUT("/:id", Controllers.UpdateUser)
			grp2.DELETE("/:id", Controllers.DeleteUser)
		}
	}
	return r
}
