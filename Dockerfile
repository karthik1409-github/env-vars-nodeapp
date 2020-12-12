FROM node

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 3000

ENV MESSAGE "Hello All"
ENV NAME "Karthikeyan. J"

CMD ["node", "server.js"]