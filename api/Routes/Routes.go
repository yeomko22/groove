package Routes

import (
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/yeomko22/groove/api/Controllers"
	_ "github.com/yeomko22/groove/api/docs"
)

func SetUpRouter() *gin.Engine {
	r := gin.Default()
	v1 := r.Group("/api")
	{
		v1.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
		v1.Group("/").GET("/", Controllers.GetHealth)
		grpTest := v1.Group("/test")
		{
			grpTest.GET("/", Controllers.GetTests)
			grpTest.POST("/", Controllers.CreateTest)
			grpTest.GET("/:id", Controllers.GetTestByID)
			grpTest.PUT("/:id", Controllers.UpdateTest)
			grpTest.DELETE("/:id", Controllers.DeleteTest)
		}
		grpUser := v1.Group("/users")
		{
			grpUser.GET("/", Controllers.GetUsers)
			grpUser.POST("/", Controllers.CreateUser)
			grpUser.GET("/:id", Controllers.GetUserByID)
		}
		grpTrack := v1.Group("/tracks")
		{
			grpTrack.GET("/id/:trackId", Controllers.GetTrackById)
			grpTrack.GET("/newest", Controllers.GetTrackNewest)
			grpTrack.GET("/hottest", Controllers.GetTrackHottest)
			grpTrack.GET("/genres", Controllers.GetTrackGenres)
			grpTrack.GET("/genre/:query", Controllers.GetTrackByGenre)
			grpTrack.GET("/tag/:query", Controllers.GetTrackByTag)
			grpTrack.GET("/user/:userId", Controllers.GetTrackByUser)
			grpTrack.PUT("/increase", Controllers.IncreaseTrackField)
		}
		grpTag := v1.Group("/tags")
		{
			grpTag.GET("/", Controllers.GetTags)
		}
	}
	return r
}
