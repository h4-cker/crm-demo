FROM node

WORKDIR /crm

COPY package.json /crm

RUN npm install

COPY . /crm

EXPOSE 3000

CMD [ "npm", "start" ]