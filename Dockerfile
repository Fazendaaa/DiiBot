FROM node:14.15.4-slim

WORKDIR /usr/src/app

COPY package.json .

RUN [ "npm", "install" ]

COPY src .

RUN [ "npm", "run", "build" ]

ENTRYPOINT [ "npm", "start" ]
