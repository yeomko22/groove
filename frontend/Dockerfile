FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY ./src ./src
COPY ./public ./public
COPY ./.prettierrc .

RUN npm run build

FROM nginx:1.19.0-alpine
RUN apk update && apk add --no-cache bind-tools
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
