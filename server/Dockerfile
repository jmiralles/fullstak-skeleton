# Select a base image
FROM  node:20.11.0-alpine3.19

WORKDIR /app

COPY package*.json ./app

RUN npm ci --only=production

COPY . .

RUN npm run build