# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ENV TZ=Europe/Budapest
# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install --force

# add app
COPY . ./
EXPOSE 3005

# start app
CMD ["npm", "start"]