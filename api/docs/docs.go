// GENERATED BY THE COMMAND ABOVE; DO NOT EDIT
// This file was generated by swaggo/swag

package docs

import (
	"bytes"
	"encoding/json"
	"strings"

	"github.com/alecthomas/template"
	"github.com/swaggo/swag"
)

var doc = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{.Description}}",
        "title": "{{.Title}}",
        "contact": {
            "name": "API 개발자 - 김형준",
            "email": "hjkim2246@gmail.com"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/": {
            "get": {
                "description": "healthcheck",
                "tags": [
                    "healthcheck"
                ],
                "responses": {
                    "200": {}
                }
            }
        },
        "/comments/:trackId": {
            "get": {
                "description": "특정 트랙의 댓글을 페이징 처리해서 읽어옴",
                "tags": [
                    "comments"
                ],
                "parameters": [
                    {
                        "type": "string",
                        "description": "한번에 몇개의 댓글을 읽어올 것인가(페이지 크기)",
                        "name": "limit",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "몇 번 댓글부터 시작할 것인가(페이지 번호)",
                        "name": "offset",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.CommentResponse"
                        }
                    }
                }
            }
        },
        "/tags/": {
            "get": {
                "description": "전체 태그들을 속한 트랙 수가 많은 순으로 읽어옴",
                "tags": [
                    "tags"
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.GenresResponse"
                        }
                    }
                }
            }
        },
        "/tracks/genre/:query": {
            "get": {
                "description": "특정 장르의 트랙을 모두 읽어옴",
                "tags": [
                    "tracks"
                ],
                "parameters": [
                    {
                        "type": "string",
                        "description": "genre",
                        "name": "query",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.TracksResponse"
                        }
                    }
                }
            }
        },
        "/tracks/genres": {
            "get": {
                "description": "전체 장르들을 속한 트랙 수가 많은 순으로 읽어옴",
                "tags": [
                    "tracks"
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.GenresResponse"
                        }
                    }
                }
            }
        },
        "/tracks/hottest": {
            "get": {
                "description": "가장 좋아요 수가 많은 트랙 상위 10개를 읽어",
                "tags": [
                    "tracks"
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.TracksResponse"
                        }
                    }
                }
            }
        },
        "/tracks/id/:trackId": {
            "get": {
                "description": "track_id 값을 url에 전달하여 해당 트랙의 정보를 읽어옴",
                "tags": [
                    "tracks"
                ],
                "parameters": [
                    {
                        "type": "string",
                        "description": "track_id",
                        "name": "track_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.TrackResponse"
                        }
                    }
                }
            }
        },
        "/tracks/increase": {
            "put": {
                "description": "특정 트랙의 플레이 수, 좋아요 수 등을 1씩 증가시킴",
                "tags": [
                    "tracks"
                ],
                "parameters": [
                    {
                        "type": "string",
                        "description": "track_id",
                        "name": "track_id",
                        "in": "query",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "playback or likes",
                        "name": "field",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.TrackResponse"
                        }
                    }
                }
            }
        },
        "/tracks/newest": {
            "get": {
                "description": "가장 최근에 업로드 된 트랙 10개를 읽어옴",
                "tags": [
                    "tracks"
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.TracksResponse"
                        }
                    }
                }
            }
        },
        "/tracks/tag/:query": {
            "get": {
                "description": "특정 태그의 트랙을 모두 읽어옴",
                "tags": [
                    "tracks"
                ],
                "parameters": [
                    {
                        "type": "string",
                        "description": "tag",
                        "name": "query",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.TracksResponse"
                        }
                    }
                }
            }
        },
        "/tracks/user/:userId": {
            "get": {
                "description": "특정 유저가 업로드한 트랙을 페이징 처리해서 읽어옴",
                "tags": [
                    "tracks"
                ],
                "parameters": [
                    {
                        "type": "string",
                        "description": "user_id",
                        "name": "user_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "1|2|3, 어떤 기준으로 트랙을 읽어올 것인가, 기본값 1",
                        "name": "option",
                        "in": "query"
                    },
                    {
                        "type": "integer",
                        "description": "10개 단위로 페이징 처리, 몇 번째 페이지를 읽어올 것인가, 기본값 0",
                        "name": "page",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.TrackResponse"
                        }
                    }
                }
            }
        },
        "/users/:userId": {
            "get": {
                "description": "userid 값에 해당하는 유저 정보를 읽어옴",
                "tags": [
                    "users"
                ],
                "parameters": [
                    {
                        "type": "string",
                        "description": "userId",
                        "name": "userId",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Models.UserResponse"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "Models.CommentPagination": {
            "type": "object",
            "properties": {
                "comment_body": {
                    "type": "string"
                },
                "comment_uploader_id": {
                    "type": "string"
                },
                "comment_uploader_profile": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                }
            }
        },
        "Models.CommentResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "comments": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Models.CommentPagination"
                    }
                },
                "count": {
                    "type": "integer"
                },
                "limit": {
                    "type": "integer"
                },
                "next_url": {
                    "type": "string"
                },
                "offset": {
                    "type": "integer"
                }
            }
        },
        "Models.Genre": {
            "type": "object",
            "properties": {
                "cnt": {
                    "type": "integer"
                },
                "trackGenre": {
                    "type": "string"
                }
            }
        },
        "Models.GenresResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "genres": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Models.Genre"
                    }
                }
            }
        },
        "Models.Track": {
            "type": "object",
            "properties": {
                "trackArtwork": {
                    "type": "string"
                },
                "trackArtworkThumbnail": {
                    "type": "string"
                },
                "trackDescription": {
                    "type": "string"
                },
                "trackDuration": {
                    "type": "integer"
                },
                "trackGenre": {
                    "type": "string"
                },
                "trackHls": {
                    "type": "string"
                },
                "trackId": {
                    "type": "string"
                },
                "trackLikesCount": {
                    "type": "integer"
                },
                "trackPermalink": {
                    "type": "string"
                },
                "trackPlaybackCount": {
                    "type": "integer"
                },
                "trackTitle": {
                    "type": "string"
                },
                "trackUserId": {
                    "type": "string"
                },
                "trackUserName": {
                    "type": "string"
                },
                "trackUserProfile": {
                    "type": "string"
                },
                "trackUserProfileThumbnail": {
                    "type": "string"
                },
                "trackUserSid": {
                    "type": "string"
                }
            }
        },
        "Models.TrackResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "track": {
                    "type": "object",
                    "$ref": "#/definitions/Models.Track"
                }
            }
        },
        "Models.TracksResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "tracks": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Models.Track"
                    }
                }
            }
        },
        "Models.User": {
            "type": "object",
            "properties": {
                "userBanner": {
                    "type": "string"
                },
                "userCity": {
                    "type": "string"
                },
                "userCountry": {
                    "type": "string"
                },
                "userDescription": {
                    "type": "string"
                },
                "userFullName": {
                    "type": "string"
                },
                "userId": {
                    "type": "string"
                },
                "userName": {
                    "type": "string"
                },
                "userProfileOrg": {
                    "type": "string"
                },
                "userProfileThumbnail": {
                    "type": "string"
                },
                "userSid": {
                    "type": "integer"
                },
                "userType": {
                    "type": "integer"
                }
            }
        },
        "Models.UserResponse": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "user": {
                    "type": "object",
                    "$ref": "#/definitions/Models.User"
                }
            }
        }
    }
}`

type swaggerInfo struct {
	Version     string
	Host        string
	BasePath    string
	Schemes     []string
	Title       string
	Description string
}

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = swaggerInfo{
	Version:     "1.0",
	Host:        "",
	BasePath:    "/api",
	Schemes:     []string{},
	Title:       "Groove API Swagger",
	Description: "Groove 프로젝트 API swagger 문서입니다.",
}

type s struct{}

func (s *s) ReadDoc() string {
	sInfo := SwaggerInfo
	sInfo.Description = strings.Replace(sInfo.Description, "\n", "\\n", -1)

	t, err := template.New("swagger_info").Funcs(template.FuncMap{
		"marshal": func(v interface{}) string {
			a, _ := json.Marshal(v)
			return string(a)
		},
	}).Parse(doc)
	if err != nil {
		return doc
	}

	var tpl bytes.Buffer
	if err := t.Execute(&tpl, sInfo); err != nil {
		return doc
	}

	return tpl.String()
}

func init() {
	swag.Register(swag.Name, &s{})
}
