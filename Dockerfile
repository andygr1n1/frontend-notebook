FROM node:14

WORKDIR /app

COPY package.json .

# RUN yarn install -g ts-node

RUN yarn install

COPY . .

ENV PORT 9998

EXPOSE $PORT

CMD ["yarn", "dev"]