FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY server.js glossary.json ./

EXPOSE 3333

CMD [ "node", "server.js" ]