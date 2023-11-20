FROM node:20-alpine3.17
WORKDIR /app
COPY . .
RUN npm ci
ENV DB_URL=${DB_URL}
ENV PORT=${PORT}
