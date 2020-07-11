package Controllers

import "github.com/gin-gonic/gin"

// healthcheck
// @Description healthcheck
// @Router / [get]
// @Success 200
// @Tags healthcheck
func GetHealth(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "live",
	})
}
