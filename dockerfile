# Use official Node.js 16 image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your bot code into the container
COPY . .

# Expose a port (optional, depending on your use case)
EXPOSE 25565

# Run the bot script when the container starts
CMD ["node", "bot.js"]
