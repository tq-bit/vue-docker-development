FROM node:14-alpine

WORKDIR /vue_app

EXPOSE 8080

CMD [ "npm", "run", "serve" ]