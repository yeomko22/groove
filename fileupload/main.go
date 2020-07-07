package main

import (
	"bytes"
	"crypto/sha1"
	"encoding/hex"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/", healthcheck)
	r.POST("/mp3", uploadMp3)
	r.POST("/file", uploadFileWithPath)
	return r
}

func getHlsDir() string {
	hlsDir := os.Getenv("GROOVE_HLS_DIR")
	if hlsDir == "" {
		hlsDir, _ = filepath.Abs("./tmp")
		if _, err := os.Stat(hlsDir); os.IsNotExist(err) {
			os.Mkdir(hlsDir, os.ModePerm)
		}
	}
	return hlsDir
}

func curTimeStr() string {
	t := time.Now()
	return t.Format("20060102150405")
}

func hashFileName(fileName string) string {
	h := sha1.New()
	h.Write([]byte(fileName + curTimeStr()))
	return hex.EncodeToString(h.Sum(nil))
}

func healthcheck(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "live",
	})
}

// mp3 파일 업로드 후, ffmpeg 이용해서 hls 포맷으로 변환
func uploadMp3(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("get form err: %s", err.Error()))
		return
	}
	fileName := filepath.Base(file.Filename)
	fileNameHash := hashFileName(fileName)
	saveDir := getHlsDir() + "/" + fileNameHash
	os.Mkdir(saveDir, os.ModePerm)

	uploadPath := saveDir + "/" + fileNameHash + ".mp3"
	if err := c.SaveUploadedFile(file, uploadPath); err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("upload file err: %s", err.Error()))
		return
	}
	convertHls(fileNameHash, uploadPath, saveDir)
	c.JSON(200, gin.H{
		"status":   "posted",
		"filehash": fileNameHash,
	})
}

func convertHls(fileNameHash, uploadPath, saveDir string) {
	outputFormat := saveDir + "/segment%04d.ts"
	m3u8Path := saveDir + "/playlist.m3u8"
	cmd := exec.Command("ffmpeg", "-i", uploadPath, "-c:a", "libmp3lame", "-b:a", "128k",
		"-f", "segment", "-segment_time", "30", "-segment_list", m3u8Path, "-segment_format", "mpegts", outputFormat)
	var out bytes.Buffer
	var stderr bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = &stderr
	err := cmd.Run()
	if err != nil {
		log.Println(fmt.Sprint(err) + ": " + stderr.String())
		return
	}
	log.Println("Result: " + out.String())
}

func uploadFileWithPath(c *gin.Context) {
	file, err := c.FormFile("file")
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("get form err: %s", err.Error()))
		return
	}
	saveDir := c.Request.FormValue("dir")
	if _, err := os.Stat(saveDir); os.IsNotExist(err) {
		os.Mkdir(saveDir, os.ModePerm)
	}
	savePath := saveDir + "/" + file.Filename
	fmt.Println(savePath)
	if err := c.SaveUploadedFile(file, savePath); err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("upload file err: %s", err.Error()))
		return
	}
	c.JSON(200, gin.H{
		"status":   "posted",
		"filehash": "save file at " + savePath,
	})
}

func main() {
	r := setupRouter()
	gin.SetMode(gin.ReleaseMode)
	r.MaxMultipartMemory = 10 << 20 // 8 MiB
	r.Run(":8100")
	log.Println("file upload server runs at port 8100")
}
