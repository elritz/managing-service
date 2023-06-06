FROM node:18 AS development

WORKDIR /usr/src/app

COPY package*.json .

WORKDIR /usr/src/app/

COPY package.json ./

RUN npm install

COPY . .

RUN npm run dev prisma.gen

RUN npm run dev build.wp.prod


FROM node:18-alpine AS production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --only-production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main.js"]
