FROM golang:1.14 as builder

WORKDIR /app
COPY go.mod .
RUN go mod download
COPY main.go .
RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-s' -o soundcloud-stream .

FROM alpine:3.7
RUN apk update && apk add --no-cache bind-tools
WORKDIR /app
COPY --from=builder /app/soundcloud-stream .
COPY ./samples ./samples
CMD ["./soundcloud-stream"]
