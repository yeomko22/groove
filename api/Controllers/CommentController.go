package Controllers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Models"
	"github.com/yeomko22/groove/api/Utils"
	"net/http"
	"strconv"
)

// @Router /comments/:trackId [get]
// @Description 특정 트랙의 댓글을 페이징 처리해서 읽어옴
// @Success 200 {object} Models.CommentResponse
// @Param limit path string true "한번에 몇개의 댓글을 읽어올 것인가(페이지 크기)"
// @Param offset path string true "몇 번 댓글부터 시작할 것인가(페이지 번호)"
// @Tags comments
func GetComment(c *gin.Context) {
	trackId := c.Param("trackId")
	limit, err := strconv.Atoi(c.DefaultQuery("limit", "20"))
	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
	}
	offset, err := strconv.Atoi(c.DefaultQuery("offset", "0"))
	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
	}
	var comments []Models.CommentPagination
	err = Models.GetComment(&comments, trackId, limit, offset)
	if err != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
	}
	var count int
	err = Models.GetCommentCount(&count, trackId)
	if err != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
	}
	url := fmt.Sprintf("comments/%s?", trackId)
	nextUrl := Utils.GenNextUrl(url, count, limit, offset)
	c.JSON(http.StatusOK, Models.NewCommentResponse(http.StatusOK, count, limit, offset, comments, nextUrl))
}
