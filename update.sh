#!/bin/bash

# Quick update script for Quantumine Landing Page
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

echo -e "${BLUE}🔄 Updating Quantumine Landing Page...${NC}"

# Navigate to project directory
PROJECT_DIR="/opt/quantumine-landing"
cd $PROJECT_DIR

# Stop containers
print_status "Stopping containers..."
docker-compose down

# Pull latest code from GitHub
print_status "Pulling latest code from GitHub..."
rm -rf temp-repo
git clone https://github.com/hoandk203/Landing-page.git temp-repo

# Backup current files (just in case)
print_status "Creating backup..."
tar -czf backup-$(date +%Y%m%d_%H%M%S).tar.gz \
    --exclude='*.tar.gz' \
    --exclude='temp-repo' \
    --exclude='.git' \
    .

# Update files
print_status "Updating application files..."
cp -r temp-repo/* .
rm -rf temp-repo

# Rebuild and restart
print_status "Rebuilding and starting containers..."
docker-compose build --no-cache
docker-compose up -d

# Wait for services
print_status "Waiting for services to start..."
sleep 10

# Health check
if curl -f -s https://quantumine.com.vn > /dev/null; then
    print_status "Update completed successfully! 🎉"
    echo -e "${GREEN}Website is live at: https://quantumine.com.vn${NC}"
else
    print_error "Website may not be responding. Check logs with: docker-compose logs"
fi

echo ""
echo -e "${YELLOW}Useful commands:${NC}"
echo "• View logs: docker-compose logs -f"
echo "• Restart: docker-compose restart"
echo "• Check status: docker-compose ps"