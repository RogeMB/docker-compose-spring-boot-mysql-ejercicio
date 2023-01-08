# Stage 1
FROM node:14.17.0-alpine as build-stage

WORKDIR /frontPart
COPY package.json .
RUN npm install
COPY . .

ARG ANGULAR_APP_API_BASE_URL
ENV ANGULAR_APP_API_BASE_URL=$ANGULAR_APP_API_BASE_URL

RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine

COPY --from=build-stage /dist/frontPart /usr/share/nginx/html
EXPOSE $ANGULAR_DOCKER_PORT

CMD nginx -g 'daemon off;'