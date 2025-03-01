# Use Node.js LTS version
FROM node:18-alpine as builder

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/.env* /app/

# Expose the port
EXPOSE 8080

# Set environment variable for port (Cloud Run uses PORT env var)
ENV PORT=8080
ENV HOST=0.0.0.0

# Start the server
CMD [ "node", ".output/server/index.mjs" ] 