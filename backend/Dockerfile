FROM node:20-alpine3.17
WORKDIR /app
COPY . .
RUN apk add python3
RUN apk add g++
RUN npm install -g node-gyp
RUN npm ci
ENV DB_URL=${DB_URL}
ENV PORT=${PORT}
