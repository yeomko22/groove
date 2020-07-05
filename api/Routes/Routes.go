package Routes

import (
"github.com/gin-gonic/gin"
"github.com/yeomko22/groove/api/Controllers"
)

func SetUpRouter() *gin.Engine {
	r := gin.Default()
	grp1 := r.Group("/test")
	{
		grp1.GET("/", Controllers.GetTests)
		grp1.POST("/", Controllers.CreateTest)
		grp1.GET("/:id", Controllers.GetTestByID)
		grp1.PUT("/:id", Controllers.UpdateTest)
		grp1.DELETE("/:id", Controllers.DeleteTest)
	}
	return r
}
