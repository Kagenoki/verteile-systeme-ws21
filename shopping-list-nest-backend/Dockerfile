
FROM node:latest AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

################
## PRODUCTION ##
################
FROM node:latest AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/ .

RUN npm install --only=production

EXPOSE 3000

CMD [ "node", "dist/main" ]