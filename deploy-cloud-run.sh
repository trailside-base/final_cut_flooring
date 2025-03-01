#!/bin/bash
set -e

# Configuration
PROJECT_ID="your-gcp-project-id"  # Replace with your actual GCP project ID
SERVICE_NAME="final-cut-flooring"
REGION="us-central1"  # Change to your preferred region

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Deploying Final Cut Flooring to Google Cloud Run...${NC}"

# 1. Make sure gcloud is initialized with the correct project
echo -e "${GREEN}Setting up Google Cloud project...${NC}"
gcloud config set project $PROJECT_ID

# 2. Enable required services
echo -e "${GREEN}Enabling required Google Cloud services...${NC}"
gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com

# 3. Build and deploy the container
echo -e "${GREEN}Building and deploying to Cloud Run...${NC}"
gcloud run deploy $SERVICE_NAME \
  --source . \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --set-env-vars "NODE_ENV=production"

# 4. Get the URL of the deployed service
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)')

echo -e "${GREEN}Deployment complete!${NC}"
echo -e "Your application is now available at: ${YELLOW}$SERVICE_URL${NC}" 