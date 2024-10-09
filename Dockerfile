FROM node:18

WORKDIR /app

RUN mkdir -p /app/public/results

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]