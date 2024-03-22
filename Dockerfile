# Use the official Node.js 14 image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, yarn.lock and .npmrc (if needed) to the working directory
COPY package.json ./

#Create user for play image, non-root mode
USER node

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY --chown=node:node . .

# Expose the port the app runs on
EXPOSE 4000:4000

# Command to run the application
CMD ["yarn", "dev"]
