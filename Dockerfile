FROM node:14.15.5
WORKDIR /usr/src/app

ARG NPM_TOKEN
COPY .npmrc .npmrc
COPY ./ ./

RUN npm install && npm run build
RUN rm -f .npmrc
CMD ["npm", "run", "start"]