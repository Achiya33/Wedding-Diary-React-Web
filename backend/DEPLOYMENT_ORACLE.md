# 🚀 Oracle Cloud (VPS) Deployment Guide - Wedding Diary

This guide walks you through deploying the **Node.js (Express) + MySQL** backend and the **React Frontend** on an Oracle Cloud Infrastructure (OCI) Ubuntu / Linux Compute Instance.

---

## 1. Prerequisites on Oracle VPS

SSH into your Oracle Cloud instance:
```bash
ssh -i /path/to/your-key.key ubuntu@<YOUR_ORACLE_IP>
```

### Install Node.js (v22), Git, and MySQL:
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js v22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs git nginx

# Verify Node & NPM
node -v
npm -v

# Install MySQL Server
sudo apt install -y mysql-server
sudo mysql_secure_installation
```

---

## 2. Configure MySQL Database

Open MySQL terminal:
```bash
sudo mysql
```

Run the following SQL queries:
```sql
CREATE DATABASE wedding_diary CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create dedicated database user
CREATE USER 'wedding_user'@'localhost' IDENTIFIED BY 'StrongPassword123#';
GRANT ALL PRIVILEGES ON wedding_diary.* TO 'wedding_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

## 3. Upload & Setup the Backend

Clone or copy your project files to `/var/www/wedding-diary`:
```bash
sudo mkdir -p /var/www/wedding-diary
sudo chown -R ubuntu:ubuntu /var/www/wedding-diary
```

Navigate to `server/`:
```bash
cd /var/www/wedding-diary/server

# Install dependencies
npm install --production

# Create .env file
nano .env
```

Paste your `.env` configuration:
```env
PORT=5000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=wedding_user
DB_PASSWORD=StrongPassword123#
DB_NAME=wedding_diary

JWT_SECRET=generate_a_random_long_secure_secret_here
JWT_EXPIRES_IN=7d

CLIENT_URL=https://yourdomain.com
UPLOAD_DIR=uploads
```

### Initialize Database & Default Data:
```bash
npm run seed
```
> This creates all 8 tables and seeds default portfolio, blogs, testimonials, services, and the admin user (`admin` / `admin123`).

---

## 4. Keep Backend Running 24/7 with PM2

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the server
pm2 start server.js --name "wedding-backend"

# Ensure PM2 restarts automatically on server reboot
pm2 startup
pm2 save
```

---

## 5. Configure Nginx Reverse Proxy & SSL

Create an Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/wedding-diary
```

Add the following config:
```nginx
server {
    listen 80;
    server_name yourdomain.com api.yourdomain.com;

    # Backend API & Uploads
    location /api/ {
        proxy_pass http://127.0.0.1:5000/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        client_max_body_size 50M;
    }

    location /uploads/ {
        proxy_pass http://127.0.0.1:5000/uploads/;
        client_max_body_size 50M;
    }

    # Frontend Static Build
    location / {
        root /var/www/wedding-diary/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

Enable site and reload Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/wedding-diary /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Enable Free SSL with Certbot (Let's Encrypt):
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 6. Oracle Cloud Ingress / Security Rules

Ensure ports **80** (HTTP) and **443** (HTTPS) are open in your Oracle Cloud Virtual Cloud Network (VCN) Ingress Rules and local firewall:
```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```
