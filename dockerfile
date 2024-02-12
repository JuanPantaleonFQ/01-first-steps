FROM node:18-alpine

WORKDIR /app

COPY package.json /

RUN npm install

COPY . /

RUN Next build

EXPOSE 3000 

CMD [ "Next" , "start" ]