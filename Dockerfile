FROM node:lts-alpine

WORKDIR /usr/src/app/my-app

COPY package*.json ./

ADD . /app/

RUN yarn

EXPOSE 3000

CMD ["npm", "start"]