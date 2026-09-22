const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

import { sanitizeUrl } from './sanitize.js'

export const handleImageUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  // We no longer need upload_preset for our custom backend

  try {
    const response = await fetch(`${API_URL}/api/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status ${response.status}`);
    }

    const data = await response.json();
    // Return the secure url provided by our backend
    return data.secure_url ? sanitizeUrl(data.secure_url) : null;
  } catch (error) {
    console.error("Backend upload error:", error);
    return null;
  }
};
