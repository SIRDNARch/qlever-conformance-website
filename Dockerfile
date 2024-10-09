FROM node:18

WORKDIR /

RUN mkdir -p /app/public/results

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]