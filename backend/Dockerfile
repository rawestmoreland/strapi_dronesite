FROM strapi/strapi:3.6.8

WORKDIR /srv/app

COPY ./package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV development

EXPOSE 1337

CMD ["strapi", "develop"]
