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

# Configuration
PROJECT_NAME="quantumine-landing"
DOMAIN="quantumine.com.vn"  # Update this with your actual domain
EMAIL="hoanyttv@gmail.com"  # Update this with your email for Let's Encrypt

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

# Update system
print_status "Updating system packages..."
apt update && apt upgrade -y

# Install git if not installed
if ! command -v git &> /dev/null; then
    print_status "Installing Git..."
    apt install -y git
else
    print_status "Git already installed"
fi

# Install Docker if not installed
if ! command -v docker &> /dev/null; then
    print_status "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    usermod -aG docker ubuntu
    rm get-docker.sh
else
    print_status "Docker already installed"
fi

# Install Docker Compose if not installed
if ! command -v docker-compose &> /dev/null; then
    print_status "Installing Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
else
    print_status "Docker Compose already installed"
fi

# Install Certbot for Let's Encrypt
if ! command -v certbot &> /dev/null; then
    print_status "Installing Certbot..."
    apt install -y certbot python3-certbot-nginx
else
    print_status "Certbot already installed"
fi

# Create project directory
PROJECT_DIR="/opt/$PROJECT_NAME"
print_status "Creating project directory at $PROJECT_DIR..."
mkdir -p $PROJECT_DIR

# Stop existing containers if running
print_status "Stopping existing containers..."
cd $PROJECT_DIR
docker-compose down 2>/dev/null || true

# Pull latest code from GitHub
print_status "Setting up application files..."
# Clone from GitHub repository
git clone https://github.com/hoandk203/Landing-page.git temp-repo
cp -r temp-repo/* .
rm -rf temp-repo

# Nginx configuration already updated with domain
print_status "Nginx configuration ready for quantumine.com.vn..."

# Build and start containers (without SSL first)
print_status "Building and starting containers..."
docker-compose build
docker-compose up -d

# Wait for services to be ready
print_status "Waiting for services to start..."
sleep 10

# Get SSL certificate
print_status "Obtaining SSL certificate..."
docker-compose down

# Temporarily start nginx for certificate challenge
docker run -d --name temp-nginx \
    -p 80:80 \
    -v /var/www/certbot:/var/www/certbot \
    nginx:alpine

# Get certificate
certbot certonly --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

# Stop temporary nginx
docker stop temp-nginx
docker rm temp-nginx

# SSL certificate paths already configured for quantumine.com.vn

# Start services with SSL
print_status "Starting services with SSL..."
docker-compose up -d

# Set up automatic certificate renewal
print_status "Setting up certificate auto-renewal..."
cat > /etc/systemd/system/certbot-renewal.service << EOF
[Unit]
Description=Certbot Renewal

[Service]
ExecStart=/usr/bin/certbot renew --quiet
EOF

cat > /etc/systemd/system/certbot-renewal.timer << EOF
[Unit]
Description=Timer for Certbot Renewal

[Timer]
OnCalendar=daily
RandomizedDelaySec=3600

[Install]
WantedBy=timers.target
EOF

systemctl enable certbot-renewal.timer
systemctl start certbot-renewal.timer

# Setup firewall
print_status "Configuring firewall..."
ufw allow ssh
ufw allow 80
ufw allow 443
ufw --force enable

# Create backup script
cat > /opt/backup-quantumine.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/backups"
DATE=$(date +%Y%m%d_%H%M%S)
PROJECT_NAME="quantumine-landing"

mkdir -p $BACKUP_DIR

# Backup application data
tar -czf $BACKUP_DIR/quantumine_backup_$DATE.tar.gz \
    /opt/$PROJECT_NAME \
    /etc/letsencrypt

# Keep only last 7 backups
find $BACKUP_DIR -name "quantumine_backup_*.tar.gz" -mtime +7 -delete

echo "Backup completed: quantumine_backup_$DATE.tar.gz"
EOF

chmod +x /opt/backup-quantumine.sh

# Add to crontab for daily backup
(crontab -l 2>/dev/null; echo "0 2 * * * /opt/backup-quantumine.sh") | crontab -

print_status "Deployment completed! 🎉"
echo ""
echo -e "${GREEN}Your Quantumine Landing Page is now live at:${NC}"
echo -e "${BLUE}https://$DOMAIN${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Update DNS records to point to this server's IP"
echo "2. Test the website functionality"
echo "3. Monitor logs with: docker-compose logs -f"
echo ""
echo -e "${GREEN}Useful commands:${NC}"
echo "• View logs: docker-compose logs -f"
echo "• Restart services: docker-compose restart"
echo "• Update app: ./deploy.sh"
echo "• Backup: /opt/backup-quantumine.sh"