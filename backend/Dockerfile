FROM node:22-alpine

WORKDIR /app

# Install native dependencies for sharp
RUN apk add --no-cache vips-dev

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application source
COPY . .

# Ensure uploads directory exists
RUN mkdir -p uploads

EXPOSE 5000

CMD ["node", "server.js"]
