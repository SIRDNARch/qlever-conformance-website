FROM node:18

WORKDIR /usr/src/app

RUN mkdir -p /usr/src/app/public/results

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port on which your app will run (if any)
EXPOSE 3000

# Start the application
CMD [ "node", "server.js" ]