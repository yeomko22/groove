package Models

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
	Code int       `json:"code"`
	Tracks []Track `json:"tracks"`
}

func NewTracksResponse(code int, tracks []Track) TracksResponse {
	var response TracksResponse
	response.Code = code
	response.Tracks = tracks
	return response
}

type GenresResponse struct {
	Code int       `json:"code"`
	Genres []Genre `json:"genres"`
}

func NewGenresResponse(code int, genres []Genre) GenresResponse {
	var response GenresResponse
	response.Code = code
	response.Genres = genres
	return response
}

type TagsResponse struct {
	Code int       `json:"code"`
	TagCnts []TagCnt `json:"tagcnts"`
}

func NewTagsResponse(code int, tagCnts []TagCnt) TagsResponse {
	var response TagsResponse
	response.Code = code
	response.TagCnts = tagCnts
	return response
}

type UserResponse struct {
	Code  int   `json:"code"`
	User User `json:"user"`
}

func NewUserResponse(code int, user User) UserResponse {
	var response UserResponse
	response.Code = code
	response.User = user
	return response
}
