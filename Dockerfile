FROM node:22-slim

COPY . .

RUN npm install --only=production

ENTRYPOINT ["node", "/index.mjs"]
