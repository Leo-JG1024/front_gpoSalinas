# Usar la imagen base de Node.js
FROM node:18 AS build


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src /app/src

EXPOSE 3000

CMD ["node", "src/server.js"]
