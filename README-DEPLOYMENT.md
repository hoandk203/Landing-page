# 🚀 Quantumine Landing Page - Production Deployment Guide

## 📋 Prerequisites

### 1. AWS EC2 Setup
- **Instance Type**: t3.small hoặc lớn hơn (tối thiểu 2GB RAM)
- **OS**: Ubuntu 22.04 LTS
- **Storage**: 20GB SSD
- **Security Group**: Mở ports 22, 80, 443

### 2. Domain Setup
- Domain: `quantumine.com.vn`
- DNS Records:
  ```
  A Record: quantumine.com.vn → EC2_PUBLIC_IP
  CNAME: www.quantumine.com.vn → quantumine.com.vn
  ```

## 🔧 Deployment Steps

### Step 1: Connect to EC2
```bash
# Download your .pem key file
chmod 400 your-ec2-key.pem

# Connect to EC2
ssh -i your-ec2-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
```

### Step 2: Clone Repository
```bash
# Clone the repository
git clone https://github.com/hoandk203/Landing-page.git
cd Landing-page
```

### Step 3: Run Deployment
```bash
# Make deploy script executable
chmod +x deploy.sh

# Run deployment (this will take 10-15 minutes)
sudo ./deploy.sh
```

### Step 4: Verify Deployment
```bash
# Check if containers are running
docker-compose ps

# Check logs
docker-compose logs -f

# Test website
curl -I https://quantumine.com.vn
```

## 🔄 Future Updates

### Manual Update
```bash
ssh -i your-ec2-key.pem ubuntu@YOUR_EC2_IP
sudo /opt/quantumine-landing/update.sh
```

### Auto-Deploy (GitHub Actions)
1. Add GitHub Secrets:
   - `EC2_HOST`: Your EC2 public IP
   - `EC2_SSH_KEY`: Content of your .pem file

2. Push code to main branch → Auto deploys!

## 🛠 Useful Commands

```bash
# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop services
docker-compose down

# Start services
docker-compose up -d

# Manual backup
sudo /opt/backup-quantumine.sh

# Check SSL certificate
sudo certbot certificates

# Renew SSL certificate
sudo certbot renew
```

## 🔍 Troubleshooting

### Common Issues

1. **Port 80/443 already in use**
   ```bash
   sudo netstat -tulpn | grep :80
   sudo systemctl stop apache2 nginx
   ```

2. **Docker permission denied**
   ```bash
   sudo usermod -aG docker ubuntu
   newgrp docker
   ```

3. **SSL certificate failed**
   ```bash
   # Check DNS propagation
   nslookup quantumine.com.vn
   
   # Retry SSL
   sudo certbot certonly --webroot --webroot-path=/var/www/certbot -d quantumine.com.vn -d www.quantumine.com.vn
   ```

4. **Website not loading**
   ```bash
   # Check containers
   docker-compose ps
   
   # Check nginx config
   docker exec quantumine-nginx nginx -t
   
   # Check firewall
   sudo ufw status
   ```

## 📊 Monitoring

### Health Checks
```bash
# Website status
curl -f https://quantumine.com.vn || echo "Site down"

# Container health
docker-compose ps | grep -v Up && echo "Containers have issues"

# Disk space
df -h | grep -E "(/$|/opt)" 

# Memory usage
free -h
```

### Log Monitoring
```bash
# Real-time logs
docker-compose logs -f --tail=100

# Error logs only
docker-compose logs | grep -i error

# Nginx access logs
docker exec quantumine-nginx tail -f /var/log/nginx/access.log
```

## 🔐 Security

### SSL Certificate Auto-Renewal
- Configured to run daily via systemd timer
- Check status: `sudo systemctl status certbot-renewal.timer`

### Firewall Rules
```bash
sudo ufw status
# Should show:
# 22/tcp (SSH) - ALLOW
# 80/tcp (HTTP) - ALLOW  
# 443/tcp (HTTPS) - ALLOW
```

### Backup Strategy
- **Auto Backup**: Daily at 2 AM via cron job
- **Location**: `/opt/backups/`
- **Retention**: 7 days
- **Manual**: `sudo /opt/backup-quantumine.sh`

## 📈 Performance Optimization

### Already Configured
- ✅ Multi-stage Docker build
- ✅ Static file caching (1 year)
- ✅ Gzip compression
- ✅ Next.js standalone output
- ✅ Image optimization
- ✅ Security headers

### Additional Optimizations
```bash
# Enable HTTP/2 (already configured)
# Add CDN (CloudFlare recommended)
# Database caching if needed
```

---

## 🆘 Emergency Contacts

- **Repository**: https://github.com/hoandk203/Landing-page.git
- **Domain**: quantumine.com.vn
- **Email**: hoanyttv@gmail.com

## 📋 Post-Deployment Checklist

- [ ] Website loads at https://quantumine.com.vn
- [ ] SSL certificate is valid (green lock)
- [ ] All pages and sections work
- [ ] Contact forms are functional
- [ ] Performance charts display data
- [ ] Mobile responsive design works
- [ ] Backup system is active
- [ ] Monitoring is set up