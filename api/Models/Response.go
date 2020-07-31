package Models

import (
	"strconv"
	"strings"
)

type TrackResponse struct {
	Code  int   `json:"code"`
	Track Track `json:"track"`
}

func NewTrackResponse(code int, track Track) TrackResponse {
	var response TrackResponse
	response.Code = code
	response.Track = track
	return response
}

type TracksResponse struct {
	Code   int     `json:"code"`
	Tracks []Track `json:"tracks"`
}

func NewTracksResponse(code int, tracks []Track) TracksResponse {
	var response TracksResponse
	response.Code = code
	response.Tracks = tracks
	return response
}

type TracksByUserResponse struct {
	Code    int     `json:"code"`
	Limit   int     `json:"limit"`
	Offset  int     `json:"offset"`
	Option  int     `json:"option"`
	NextUrl string  `json:"next_url"`
	Tracks  []Track `json:"tracks"`
}

func NewTracksByUserResponse(code int, tracks []Track, limit, offset, option int, nextUrl string) TracksByUserResponse {
	var response TracksByUserResponse
	response.Code = code
	response.Tracks = tracks
	response.Limit = limit
	response.Offset = offset
	response.Option = option
	response.NextUrl = nextUrl
	return response
}

type GenresResponse struct {
	Code   int     `json:"code"`
	Genres []Genre `json:"genres"`
}

func NewGenresResponse(code int, genres []Genre) GenresResponse {
	var response GenresResponse
	response.Code = code
	response.Genres = genres
	return response
}

type TagsResponse struct {
	Code    int      `json:"code"`
	TagCnts []TagCnt `json:"tagcnts"`
}

func NewTagsResponse(code int, tagCnts []TagCnt) TagsResponse {
	var response TagsResponse
	response.Code = code
	response.TagCnts = tagCnts
	return response
}

type UserResponse struct {
	Code int  `json:"code"`
	User User `json:"user"`
}

func NewUserResponse(code int, user User) UserResponse {
	var response UserResponse
	response.Code = code
	response.User = user
	return response
}

type CommentResponse struct {
	Code     int                 `json:"code"`
	Count    int                 `json:"count"`
	Limit    int                 `json:"limit"`
	Offset   int                 `json:"offset"`
	Comments []CommentPagination `json:"comments"`
	NextUrl  string              `json:"next_url"`
}

func NewCommentResponse(code, count, limit, offset int, comments []CommentPagination, nextUrl string) CommentResponse {
	var response CommentResponse
	response.Code = code
	response.Count = count
	response.Limit = limit
	response.Offset = offset
	response.Comments = comments
	response.NextUrl = nextUrl
	return response
}

type WaveformResponse struct {
	Code    int    `json:"code"`
	TrackId string `json:"track_id"`
	Wave    []int  `json:"wave"`
}

func NewWaveformResponse(code int, waveform Waveform) WaveformResponse {
	var response WaveformResponse
	response.Code = code
	response.TrackId = waveform.WaveformTrackId
	strArray := strings.Split(waveform.Waveform, "|")
	var numArray []int
	for _, v := range strArray {
		i, _ := strconv.Atoi(v)
		numArray = append(numArray, i)
	}
	response.Wave = numArray
	return response
}
