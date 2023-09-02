FROM node:20-alpine
EXPOSE 3000

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start:prod"]