export const CLOUDINARY_CONFIG = {
  cloudName: "dzvh8wvip",
  uploadPreset: "wedding_preset",
  uploadUrl: "https://api.cloudinary.com/v1_1/dzvh8wvip/image/upload"
};

import { sanitizeUrl } from './sanitize.js'

export const handleImageUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset); 

  try {
    const response = await fetch(CLOUDINARY_CONFIG.uploadUrl, {
      method: "POST",
      body: formData,
    });
    
    const data = await response.json();
    // Sanitize the returned URL to prevent malicious redirects
    return data.secure_url ? sanitizeUrl(data.secure_url) : null;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
};