package Controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Models"
	"net/http"
)

// @Router /tags/ [get]
// @Description 전체 태그들을 속한 트랙 수가 많은 순으로 읽어옴
// @Success 200 {object} Models.GenresResponse
// @Tags tags
func GetTags(c *gin.Context) {
	var tagCnts []Models.TagCnt
	err := Models.GetTags(&tagCnts)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewTagsResponse(http.StatusOK, tagCnts))
	}
}
