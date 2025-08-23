#!/bin/bash

# Deployment script cho Quantumine Landing Page
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment for Quantumine Landing Page...${NC}"

# Configuration - THAY ĐỔI CÁC GIÁ TRỊ NÀY
PROJECT_NAME="quantumine-landing"
DOMAIN="quantumine.vn"  # ← THAY DOMAIN THẬT
EMAIL="admin@quantumine.vn"  # ← THAY EMAIL THẬT

# ... rest of script unchanged until line 82 ...

# Pull latest code - CHỌN 1 CÁCH
print_status "Setting up application files..."

# OPTION 1: Git clone (nếu code đã push lên GitHub)
git clone https://github.com/hoandk203/Landing-page.git .

# OPTION 2: Copy từ home directory (nếu đã upload qua SCP)
# cp -r /home/ubuntu/Landing-page/* .

# OPTION 3: Đã copy manual rồi thì comment dòng trên

# ... rest unchanged ...