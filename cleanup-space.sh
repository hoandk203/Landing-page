#!/bin/bash

# Emergency cleanup script for EC2 disk space
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

echo -e "${YELLOW}🧹 Emergency Disk Space Cleanup${NC}"

# Check current space
echo "Current disk usage:"
df -h /

echo ""
echo "Cleaning up..."

# Stop containers to free up space
print_status "Stopping all Docker containers..."
docker stop $(docker ps -aq) 2>/dev/null || true

# Remove all Docker images, containers, volumes
print_status "Removing all Docker data..."
docker system prune -af --volumes 2>/dev/null || true

# Remove Docker builder cache
print_status "Cleaning Docker builder cache..."
docker builder prune -af 2>/dev/null || true

# Clean apt cache
print_status "Cleaning APT cache..."
sudo apt-get clean 2>/dev/null || true
sudo rm -rf /var/lib/apt/lists/* 2>/dev/null || true

# Clean logs
print_status "Cleaning system logs..."
sudo journalctl --vacuum-time=1d 2>/dev/null || true
sudo rm -rf /var/log/*.log.* 2>/dev/null || true

# Clean swap if exists
if [ -f /swapfile ]; then
    print_status "Temporarily disabling swap..."
    sudo swapoff /swapfile 2>/dev/null || true
fi

# Clean temp files
print_status "Cleaning temporary files..."
sudo rm -rf /tmp/* 2>/dev/null || true
sudo rm -rf /var/tmp/* 2>/dev/null || true

# Clean old builds
print_status "Cleaning old build files..."
sudo rm -rf /opt/quantumine-landing/.next 2>/dev/null || true
sudo rm -rf /opt/quantumine-landing/node_modules 2>/dev/null || true
sudo rm -rf /opt/quantumine-landing/backup-* 2>/dev/null || true

# Clean user cache
print_status "Cleaning user cache..."
sudo rm -rf /home/ubuntu/.cache/* 2>/dev/null || true
sudo rm -rf /root/.cache/* 2>/dev/null || true

# Re-enable swap
if [ -f /swapfile ]; then
    print_status "Re-enabling swap..."
    sudo swapon /swapfile 2>/dev/null || true
fi

echo ""
echo "After cleanup:"
df -h /

echo ""
AVAILABLE_GB=$(df / | awk 'NR==2 {print int($4/1024/1024)}')
if [ $AVAILABLE_GB -gt 2 ]; then
    echo -e "${GREEN}✅ Success! ${AVAILABLE_GB}GB free space available${NC}"
    echo -e "${GREEN}You can now retry deployment${NC}"
else
    echo -e "${RED}⚠ Warning: Only ${AVAILABLE_GB}GB free. Consider upgrading EC2 instance${NC}"
    echo -e "${YELLOW}Recommended: t3.medium with 30GB+ storage${NC}"
fi