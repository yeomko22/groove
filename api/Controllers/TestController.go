package Controllers

import (
"fmt"
"net/http"
"github.com/gin-gonic/gin"
"github.com/yeomko22/groove/api/Models"
)

func GetTests(c *gin.Context) {
	var test []Models.Test
	err := Models.GetAllTest(&test)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, test)
	}
}

func CreateTest(c *gin.Context) {
	var test Models.Test
	c.BindJSON(&test)
	err := Models.CreateTest(&test)
	if err != nil {
		fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, test)
	}
}

func GetTestByID(c *gin.Context) {
	id := c.Params.ByName("id")
	var test Models.Test
	err := Models.GetTestByID(&test, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, test)
	}
}

func UpdateTest(c *gin.Context) {
	var test Models.Test
	id := c.Params.ByName("id")
	err := Models.GetTestByID(&test, id)
	if err != nil {
		c.JSON(http.StatusNotFound, test)
	}
	c.BindJSON(&test)
	err = Models.UpdateTest(&test, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, test)
	}
}

func DeleteTest(c *gin.Context) {
	var test Models.Test
	id := c.Params.ByName("id")
	err := Models.DeleteTest(&test, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"id" + id: "is deleted"})
	}
}
