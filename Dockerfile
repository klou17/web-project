ARG NODE_VERSION=22.14

FROM node:${NODE_VERSION}

# Use production node environment by default.
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm ci --ignore-scripts

# Copy the rest of the source files into the image.
COPY . .

RUN npm run build

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application as a non-root user.
USER node

# Run the application.
CMD npm run start
