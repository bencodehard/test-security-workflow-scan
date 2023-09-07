FROM node:18-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . .

RUN npm install
RUN npm install -g npm@9.8.1

# COPY deployment/.env_dev .env
# RUN rm deployment/.env_dev deployment/.env_uat deployment/.env_prod

RUN npm run build
EXPOSE 3000

CMD npm start
