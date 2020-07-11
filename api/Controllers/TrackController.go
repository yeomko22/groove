package Controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Models"
	"net/http"
	"strings"
)

func GetTrackById(c *gin.Context) {
	trackId := c.Param("trackId")
	var track Models.Track
	err := Models.GetTrackById(trackId, &track)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, track)
	}
}

func GetTrackByGenre(c *gin.Context) {
	query := c.Param("query")
	query = strings.ReplaceAll(query, "+", " ")
	var tracks []Models.Track
	err := Models.GetTrackByGenre(&tracks, query)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, tracks)
	}
}

func GetTrackGenres(c *gin.Context) {
	var genres []Models.Genre
	err := Models.GetTrackGenres(&genres)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, genres)
	}
}

func GetTrackByTag(c *gin.Context) {
	query := c.Param("query")
	query = strings.ReplaceAll(query, "+", " ")
	var tracks []Models.Track
	err := Models.GetTrackByTag(&tracks, query)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, tracks)
	}
}

func GetTrackNewest(c *gin.Context) {
	var tracks []Models.Track
	err := Models.GetTrackNewest(&tracks)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, tracks)
	}
}

func GetTrackHottest(c *gin.Context) {
	var tracks []Models.Track
	err := Models.GetTrackHottest(&tracks)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, tracks)
	}
}

func GetTrackByUser(c *gin.Context) {
	userId := c.Param("userId")
	pageInfo := Models.NewPageInfo()
	err := c.BindJSON(&pageInfo)
	if err != nil {
		c.AbortWithStatus(http.StatusBadRequest)
		return
	}
	var tracks []Models.Track
	err = Models.GetTrackByUser(&tracks, userId, pageInfo)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
		return
	}
	c.JSON(http.StatusOK, tracks)
}

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
	c.JSON(http.StatusOK, track)
}
