package Controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Models"
	"net/http"
)

func GetTags(c *gin.Context) {
	var tagCnts []Models.TagCnt
	err := Models.GetTags(&tagCnts)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, tagCnts)
	}
}
