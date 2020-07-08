# frontend build and push
docker build -t yeomko/groove-frontend:latest ./frontend
docker push yeomko/groove-frontend:latest

# api build and push
docker build -t yeomko/groove-api:latest ./api
docker push yeomko/groove-api:latest

# fileupload build and push
docker build -t yeomko/groove-fileupload:latest ./fileupload
docker push yeomko/groove-fileupload:latest

# stream build and push
docker build -t yeomko/groove-stream:latest ./stream
docker push yeomko/groove-stream:latest
