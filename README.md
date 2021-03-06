# React Redux User System

> A React project for user system

## Screenshot
<p align="center">
  <img src="https://github.com/chutiphon-k/react-redux-user-system/blob/master/README-images/screenshot-listuser.png">

  <img src="https://github.com/chutiphon-k/react-redux-user-system/blob/master/README-images/screenshot-adduser.png">

  <img src="https://github.com/chutiphon-k/react-redux-user-system/blob/master/README-images/screenshot-edituser.png">
</p>

## Build Setup Web

``` bash
cd web

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

# build for production
npm run build
```

## Build Setup API

``` bash
cd api

# install dependencies
npm install

# serve at localhost:9090
npm run start
```

## Docker Setup

``` bash
# setup docker container
docker build -t react-redux-user-system .

#start docker container
docker run -d -p 8080:80 react-redux-user-system

#stop docker container
docker ps --all
docker stop [CONTAINER ID]

#remove docker container
docker ps --all
docker rm [CONTAINER ID]

#web interface
open url http://localhost:8080
```