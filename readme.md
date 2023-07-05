# 🐋 Develop Vue.js applications with Docker

This repository is a deployable example for my article at https://blog.q-bit.me/a-step-by-step-guide-for-developing-and-deploying-a-vue-js-app-with-docker-part-two/.

It might as well serve as a boilerplate for smaller projects as it comes with a built-in store, powered by Vue 3's composition API.

> Update: Check out [Chattergram](https://github.com/tq-bit/chattergram) for a full-stack approach to Vue 3 development

## Quickstart

1. Make sure you have Docker installed. You can find a quick setup guide [in the official docs](https://docs.docker.com/engine/install/) or in my [previous blogpost](https://blog.q-bit.me/how-to-develop-and-deploy-a-vue-js-app-with-docker-part-one/#installing-docker).
2. Clone this repos to your local machine

```bash
git clone https://github.com/tq-bit/vue-docker-development.git
```

> If you have not read the previous article, make sure to manually install all dependencies in your dev project
> Run `cd vue_app && npm install && cd ..` before moving ahead

3. Build the image you need for development or production OR start the service with `docker-compose`

```bash
# Development version. Uses Vue CLI to serve the app during development
docker build  \
    -f ./dockerfiles/Dev.Dockerfile \
    -t vue_app:dev \
    vue_app

# Deployable version. Uses the official Nginx to serve the Vue SPA
docker build \
    -f ./dockerfiles/Deploy.Dockerfile \
    -t vue_app:production \
    vue_app
```

3.1. Use docker compose like this (you can skip steps 4 and 5 if you do):

```sh
docker compose up     # Use docker's built-in compose function
# docker-compose up   # Use the docker-compose binary

4. Start a container that serves the development version of your app

```bash
# Open your browser at http://localhost:8080 to access the app
docker run \
    -v /path/to/project/vue_app:/vue_app \
    -p 8080:8080 \
    -it vue_app:dev
```

5. Or test the optimized built with Docker

```bash
# Open your browser at http://localhost to access the app
docker run -p 80:80 vue_app:production
```

6. Add additional NPM packages by using the `vue_helper` image

```bash
# This will create a Docker image that helps you to manage
# your application during development
docker build \
  --build-arg USER_ID=$(id -u) \
  --build-arg GROUP_ID=$(id -g) \
  -t vue_helper - < ./dockerfiles/Setup.Dockerfile

docker run -v /path/to/your/project/:/vue-setup -it vue_helper
```
