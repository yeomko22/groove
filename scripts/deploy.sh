# get git commit hashcode
export SHA=$(git rev-parse HEAD)

# frontend build and push
docker build -t yeomko/groove-frontend:latest -t yeomko/groove-frontend:$SHA ./frontend
docker push yeomko/groove-frontend:latest
docker push yeomko/groove-frontend:$SHA

# api build and push
docker build -t yeomko/groove-api:latest -t yeomko/groove-api:$SHA ./api
docker push yeomko/groove-api:latest
docker push yeomko/groove-api:$SHA

# fileupload build and push
docker build -t yeomko/groove-fileupload:latest -t yeomko/groove-fileupload:$SHA ./fileupload
docker push yeomko/groove-fileupload:latest
docker push yeomko/groove-fileupload:$SHA

# stream build and push
docker build -t yeomko/groove-stream:latest -t yeomko/groove-stream:$SHA ./stream
docker push yeomko/groove-stream:latest
docker push yeomko/groove-stream:$SHA

kubectl apply -f k8s
kubectl set image deployments/frontend-deployment stream=yeomko/groove-frontend:$SHA
kubectl set image deployments/api-deployment api=yeomko/groove-api:$SHA
kubectl set image deployments/fileupload-deployment fileupload=yeomko/groove-fileupload:$SHA
kubectl set image deployments/stream-deployment stream=yeomko/groove-stream:$SHA
