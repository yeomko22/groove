package Controllers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Models"
	"github.com/yeomko22/groove/api/Utils"
	"net/http"
	"strconv"
	"strings"
)

// @Router /tracks/id/:trackId [get]
// @Description track_id 값을 url에 전달하여 해당 트랙의 정보를 읽어옴
// @Param track_id path string true "track_id"
// @Router /tracks/id/:trackId [get]
// @Success 200 {object} Models.TrackResponse
// @Tags tracks
func GetTrackById(c *gin.Context) {
	trackId := c.Param("trackId")
	var track Models.Track
	err := Models.GetTrackById(trackId, &track)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, Models.NewTrackResponse(http.StatusOK, track))
	}
}

// @Router /tracks/genre/:query [get]
// @Description 특정 장르의 트랙을 모두 읽어옴
// @Param query path string true "genre"
// @Success 200 {object} Models.TracksResponse
// @Tags tracks
func GetTrackByGenre(c *gin.Context) {
	query := c.Param("query")
	query = strings.ReplaceAll(query, "+", " ")
	var tracks []Models.Track
	err := Models.GetTrackByGenre(&tracks, query)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewTracksResponse(http.StatusOK, tracks))
	}
}

// @Router /tracks/genres [get]
// @Description 전체 장르들을 속한 트랙 수가 많은 순으로 읽어옴
// @Success 200 {object} Models.GenresResponse
// @Tags tracks
func GetTrackGenres(c *gin.Context) {
	var genres []Models.Genre
	err := Models.GetTrackGenres(&genres)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewGenresResponse(http.StatusOK, genres))
	}
}

// @Router /tracks/tag/:query [get]
// @Description 특정 태그의 트랙을 모두 읽어옴
// @Param query path string true "tag"
// @Success 200 {object} Models.TracksResponse
// @Tags tracks
func GetTrackByTag(c *gin.Context) {
	query := c.Param("query")
	query = strings.ReplaceAll(query, "+", " ")
	var tracks []Models.Track
	err := Models.GetTrackByTag(&tracks, query)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewTracksResponse(http.StatusOK, tracks))
	}
}

// @Router /tracks/newest [get]
// @Description 가장 최근에 업로드 된 트랙 10개를 읽어옴
// @Success 200 {object} Models.TracksResponse
// @Tags tracks
func GetTrackNewest(c *gin.Context) {
	var tracks []Models.Track
	err := Models.GetTrackNewest(&tracks)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewTracksResponse(http.StatusOK, tracks))
	}
}

// @Router /tracks/hottest [get]
// @Description 가장 좋아요 수가 많은 트랙 상위 10개를 읽어
// @Success 200 {object} Models.TracksResponse
// @Tags tracks
func GetTrackHottest(c *gin.Context) {
	var tracks []Models.Track
	err := Models.GetTrackHottest(&tracks)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewTracksResponse(http.StatusOK, tracks))
	}
}

// @Router /tracks/user/:userId [get]
// @Description 특정 유저가 업로드한 트랙을 페이징 처리해서 읽어옴
// @Param user_id path string true "user_id"
// @Param option path int false "1|2|3, 어떤 기준으로 트랙을 읽어올 것인가, 기본값 1"
// @Param limit path int false "한번에 몇개의 트랙 정보를 가져올 것인가, 기본값 10"
// @Param offset path int false "몇번째 트랙부터 정보를 가져올 것이가, 기본값 0"
// @Success 200 {object} Models.TrackResponse
// @Tags tracks
func GetTrackByUser(c *gin.Context) {
	userId := c.Param("userId")
	option, err := strconv.Atoi(c.DefaultQuery("option", "1"))
	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
	}
	limit, err := strconv.Atoi(c.DefaultQuery("limit", "10"))
	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
	}
	offset, err := strconv.Atoi(c.DefaultQuery("offset", "0"))
	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
	}
	var tracks []Models.Track
	err = Models.GetTrackByUser(&tracks, userId, option, limit, offset)
	if err != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
	}
	var count int
	err = Models.GetTrackByUserCount(&count, userId)
	if err != nil {
		c.AbortWithStatus(http.StatusInternalServerError)
	}
	url := fmt.Sprintf("/tracks/user/%s?option=%d&", userId, option)
	nextUrl := Utils.GenNextUrl(url, count, limit, offset)
	c.JSON(http.StatusOK,
		Models.NewTracksByUserResponse(http.StatusOK, tracks, option, limit, offset, nextUrl))
}

// @Router /tracks/increase [put]
// @Description 특정 트랙의 플레이 수, 좋아요 수 등을 1씩 증가시킴
// @Param track_id query string true "track_id"
// @Param field query string true "playback or likes"
// @Success 200 {object} Models.TrackResponse
// @Tags tracks
func IncreaseTrackField(c *gin.Context) {
	var increaseTrackField Models.IncreaseTrackField
	err := c.BindJSON(&increaseTrackField)
	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}
	var track Models.Track
	err = Models.IncreaseTrackPlayback(increaseTrackField, &track)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
		return
	}
	c.JSON(http.StatusOK,
		Models.NewTrackResponse(http.StatusOK, track))
}
