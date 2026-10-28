# 🐳 Oracle Cloud (OCI) Docker Deployment Guide — Wedding Diary

This step-by-step guide explains how to deploy the entire **Wedding Diary** application (Frontend + Backend + MySQL Database) on an **Oracle Cloud Infrastructure (OCI)** Compute Instance using **Docker & Docker Compose**.

---

## 🏗️ Docker Architecture

```
Internet (Port 80/443)
       │
       ▼
┌────────────────────────────────────────────────────────┐
│  [Container: wedding_frontend] (Nginx Alpine)          │
│  - Serves React production static assets (SPA)         │
│  - Proxies /api/ requests ────► [wedding_backend:5000] │
│  - Proxies /uploads/ requests ► [wedding_backend:5000] │
└──────────────────────────┬─────────────────────────────┘
                           │ internal network
                           ▼
┌────────────────────────────────────────────────────────┐
│  [Container: wedding_backend] (Node.js 22 Express)     │
│  - REST API & Sharp WebP image processing engine       │
│  - Persistent Volume: uploads_data                     │
└──────────────────────────┬─────────────────────────────┘
                           │ internal network
                           ▼
┌────────────────────────────────────────────────────────┐
│  [Container: wedding_db] (MySQL 8.4)                   │
│  - Persistent Volume: mysql_data                       │
└────────────────────────────────────────────────────────┘
```

---

## 📋 Step 1: Open Ports in Oracle Cloud (OCI) Console

By default, Oracle Cloud blocks all incoming web traffic. You must allow Port **80** (HTTP) and **443** (HTTPS):

1. Open the [Oracle Cloud Console](https://cloud.oracle.com/).
2. Navigate to: **Networking** ➔ **Virtual Cloud Networks (VCN)**.
3. Click your VCN ➔ Click **Security Lists** (left menu) ➔ Click **Default Security List for...**.
4. Click **Add Ingress Rules** and enter:
   - **Source Type:** CIDR
   - **Source CIDR:** `0.0.0.0/0`
   - **IP Protocol:** TCP
   - **Destination Port Range:** `80,443`
   - **Description:** Allow HTTP and HTTPS traffic
5. Click **Add Ingress Rules**.

---

## 💻 Step 2: Connect to your Oracle Instance & Open OS Firewall

SSH into your Oracle Ubuntu VPS:
```bash
ssh -i /path/to/your-key.key ubuntu@<YOUR_ORACLE_PUBLIC_IP>
```

> ⚠️ **CRITICAL OCI STEP:** Ubuntu instances on Oracle Cloud have a local firewall (`iptables`) that drops port 80/443 even when allowed in the VCN. Run these commands to open them:

```bash
# Allow Port 80 and 443 in local iptables
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT

# Save iptables permanently
sudo apt-get install -y iptables-persistent
sudo netfilter-persistent save
```

---

## 🐳 Step 3: Install Docker & Docker Compose

Run the official Docker convenience script:
```bash
# Update Ubuntu packages
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Allow your user to run docker without sudo
sudo usermod -aG docker $USER
newgrp docker

# Verify Docker installation
docker --version
docker compose version
```

---

## 📥 Step 4: Clone the Project & Configure

```bash
# Clone the repository
git clone https://github.com/Achiya33/Wedding-Diary-React-Web.git
cd Wedding-Diary-React-Web
```

### (Optional) Customize Environment Variables:
Create a `.env` file at the root if you wish to change default passwords:
```bash
nano .env
```
Paste (change passwords as needed):
```env
DB_ROOT_PASSWORD=MySecureRootPass2026!
DB_USER=wedding_user
DB_PASSWORD=MySecureWeddingPass2026!
JWT_SECRET=super_secret_wedding_diary_jwt_key_2026_change_in_production
CLIENT_URL=http://<YOUR_ORACLE_PUBLIC_IP>
```
Press `Ctrl + O` then `Enter` to save, and `Ctrl + X` to exit.

---

## 🚀 Step 5: Build and Start Containers

Run this single command:
```bash
docker compose up -d --build
```

Docker will:
1. Pull MySQL 8.4 and launch `wedding_db`.
2. Build the Node.js backend container `wedding_backend`.
3. Build the React frontend with Vite & package into Nginx `wedding_frontend`.

### Check container status:
```bash
docker compose ps
```
All 3 containers (`wedding_db`, `wedding_backend`, `wedding_frontend`) should show **Up / healthy**.

---

## 🌱 Step 6: Initialize Database & Seed Default Data

Once the database container is healthy (wait ~10 seconds), run the seeder inside the backend container:
```bash
docker compose exec backend npm run seed
```
You will see:
```text
✅ Database "wedding_diary" verified.
✅ Tables created/verified from schema.sql
👑 Default admin created -> Username: admin | Password: admin123
✅ Site settings and hero slides seeded.
✅ Services seeded.
✅ Testimonials seeded.
✅ Blogs seeded.
✅ Portfolio & gallery images seeded.
🎉 Seeding completed successfully!
```

---

## 🌐 Step 7: Access Your Website & Admin Panel!

Open your browser and visit:
* 🌐 **Public Website:** `http://<YOUR_ORACLE_PUBLIC_IP>`
* 🔒 **Admin Panel:** `http://<YOUR_ORACLE_PUBLIC_IP>/admin`
  * **Username:** `admin`
  * **Password:** `admin123`

---

## 🔒 Step 8: Adding Free SSL (HTTPS) with Certbot (When you have a domain)

If you point a domain name (e.g. `weddingdiary.lk`) to your Oracle IP:

1. Stop port 80 temporarily:
   ```bash
   docker compose stop frontend
   ```
2. Install Certbot and generate certificate:
   ```bash
   sudo apt install -y certbot
   sudo certbot certonly --standalone -d yourdomain.com -d www.yourdomain.com
   ```
3. Update `frontend/nginx.conf` with SSL configuration pointing to `/etc/letsencrypt/live/yourdomain.com/` and re-run:
   ```bash
   docker compose up -d
   ```

---

## 🛠️ Useful Docker Management Commands

| Action | Command |
| :--- | :--- |
| **View real-time logs** | `docker compose logs -f` |
| **Backend logs only** | `docker compose logs -f backend` |
| **Restart containers** | `docker compose restart` |
| **Stop all containers** | `docker compose down` |
| **Rebuild after code changes** | `docker compose up -d --build` |
| **Backup MySQL database** | `docker compose exec db mysqldump -u wedding_user -p wedding_diary > backup.sql` |
