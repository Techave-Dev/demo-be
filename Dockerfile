# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

COPY . .

# Install project dependencies
RUN npm install

# Copy the rest of the application code
CMD [ "npm","run","dev" ]