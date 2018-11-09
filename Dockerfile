# Base Image
FROM node:9.4

# set working dir
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install

# bundle app source 
COPY . .

# Specify port
EXPOSE 3000

# start app
CMD ["npm", "start"]