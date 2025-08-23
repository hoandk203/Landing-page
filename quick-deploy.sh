#!/bin/bash

# Quick deployment script - Optimized for faster builds
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Quick Deployment for Quantumine Landing Page...${NC}"

# Configuration
PROJECT_NAME="quantumine-landing"
DOMAIN="quantumine.com.vn"
EMAIL="hoanyttv@gmail.com"

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   print_error "This script must be run as root (use sudo)"
   exit 1
fi

# Create swap if system has less than 4GB RAM
MEMORY=$(free -m | awk 'NR==2{printf "%.0f", $2}')
if [ "$MEMORY" -lt 3500 ]; then
    print_status "Adding swap space for better build performance..."
    if [ ! -f /swapfile ]; then
        fallocate -l 2G /swapfile
        chmod 600 /swapfile
        mkswap /swapfile
        swapon /swapfile
        echo '/swapfile none swap sw 0 0' >> /etc/fstab
        print_status "2GB swap file created"
    else
        swapon /swapfile 2>/dev/null || true
        print_status "Existing swap activated"
    fi
fi

# Project directory
PROJECT_DIR="/opt/$PROJECT_NAME"
print_status "Using project directory: $PROJECT_DIR"
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down 2>/dev/null || true

# Clean up space first
print_status "Cleaning up disk space..."
docker system prune -af --volumes 2>/dev/null || true
rm -rf temp-repo node_modules .next 2>/dev/null || true

# Check available space
AVAILABLE_SPACE=$(df / | awk 'NR==2 {print $4}')
print_status "Available disk space: $(($AVAILABLE_SPACE / 1024)) MB"

if [ $AVAILABLE_SPACE -lt 2097152 ]; then  # Less than 2GB
    print_error "Insufficient disk space. Need at least 2GB free."
    print_status "Cleaning more aggressively..."
    # Clean Docker cache
    docker builder prune -af 2>/dev/null || true
    # Clean apt cache
    apt-get clean 2>/dev/null || true
    rm -rf /var/lib/apt/lists/* 2>/dev/null || true
    # Clean logs
    journalctl --vacuum-time=1d 2>/dev/null || true
fi

# Pull latest code from GitHub with shallow clone for speed
print_status "Pulling latest code from GitHub (shallow clone)..."
cd /tmp
rm -rf Landing-page-temp 2>/dev/null || true
git clone --depth 1 https://github.com/hoandk203/Landing-page.git Landing-page-temp
cd $PROJECT_DIR
cp -r /tmp/Landing-page-temp/* .
rm -rf /tmp/Landing-page-temp

# Build with build cache and parallel processes
print_status "Building with optimized settings..."
export DOCKER_BUILDKIT=1
export BUILDKIT_PROGRESS=plain

# Build only the app service first
docker-compose build --no-cache --parallel app

print_status "Starting services..."
docker-compose up -d

# Wait for services to be ready
print_status "Waiting for services to start..."
sleep 15

# Quick health check
if curl -f -s -k https://localhost > /dev/null 2>&1 || curl -f -s http://localhost > /dev/null 2>&1; then
    print_status "Services are running!"
else
    print_warning "Services may still be starting up..."
fi

print_status "Quick deployment completed! 🎉"
echo ""
echo -e "${GREEN}Your Quantumine Landing Page should be live at:${NC}"
echo -e "${BLUE}https://$DOMAIN${NC}"
echo ""
echo -e "${YELLOW}Build optimization applied:${NC}"
echo "• Increased Node.js memory limit"
echo "• Added swap space if needed"
echo "• Used Docker BuildKit for faster builds"
echo "• Shallow git clone for speed"
echo ""
echo -e "${GREEN}Monitor with:${NC}"
echo "• docker-compose logs -f"
echo "• docker-compose ps"