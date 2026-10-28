-- Wedding Diary Database Schema for MySQL 8.x / MariaDB

CREATE DATABASE IF NOT EXISTS `wedding_diary` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `wedding_diary`;

-- 1. Admins Table
CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` VARCHAR(50) DEFAULT 'admin',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Portfolio Table
CREATE TABLE IF NOT EXISTS `portfolio` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(191) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `subtitle` VARCHAR(255) DEFAULT '',
  `category` VARCHAR(100) NOT NULL DEFAULT 'Wedding',
  `cover_image` TEXT NOT NULL,
  `quote` TEXT DEFAULT NULL,
  `order_index` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Portfolio Gallery Images Table
CREATE TABLE IF NOT EXISTS `portfolio_images` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `portfolio_id` INT NOT NULL,
  `image_url` TEXT NOT NULL,
  `order_index` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX (`portfolio_id`),
  FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Blog Posts Table
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(191) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `date_display` VARCHAR(100) DEFAULT '',
  `read_time` VARCHAR(50) DEFAULT '3 min read',
  `excerpt` TEXT DEFAULT NULL,
  `cover_image` TEXT DEFAULT NULL,
  `content_json` LONGTEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Testimonials Table
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `client_name` VARCHAR(255) NOT NULL,
  `quote` TEXT DEFAULT NULL,
  `category` VARCHAR(100) DEFAULT 'Wedding Shoot',
  `couple_image` TEXT DEFAULT NULL,
  `order_index` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Services Table
CREATE TABLE IF NOT EXISTS `services` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT DEFAULT NULL,
  `pricing_details` TEXT DEFAULT NULL,
  `features_json` TEXT DEFAULT NULL,
  `cover_image` TEXT DEFAULT NULL,
  `order_index` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Inquiries Table
CREATE TABLE IF NOT EXISTS `inquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `page` VARCHAR(100) DEFAULT 'Contact',
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) DEFAULT '',
  `phone` VARCHAR(100) DEFAULT NULL,
  `event_type` VARCHAR(100) DEFAULT 'Wedding',
  `event_date` VARCHAR(100) DEFAULT NULL,
  `location` VARCHAR(255) DEFAULT NULL,
  `guest_count` VARCHAR(50) DEFAULT NULL,
  `budget` VARCHAR(100) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `data_json` LONGTEXT DEFAULT NULL,
  `status` VARCHAR(50) DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Site Settings & Hero Slides Table
CREATE TABLE IF NOT EXISTS `site_settings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `setting_key` VARCHAR(100) NOT NULL UNIQUE,
  `setting_value` LONGTEXT NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
