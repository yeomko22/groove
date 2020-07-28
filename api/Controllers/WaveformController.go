package Controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/yeomko22/groove/api/Models"
	"net/http"
)

// @Router /waveform/:trackId [get]
// @Description 특정 트랙의 웨이브 폼 정보를 가져옴
// @Success 200 {object} Models.WaveformResponse
// @Param track_id path string true "track_id"
// @Tags waveform
func GetWaveform(c *gin.Context) {
	trackId := c.Param("trackId")
	var waveform Models.Waveform
	err := Models.GetWaveform(&waveform, trackId)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK,
			Models.NewWaveformResponse(http.StatusOK, waveform))
	}
}
