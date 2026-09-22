import fs from 'fs';
import path from 'path';

async function testUpload() {
  const API_URL = 'http://127.0.0.1:5000';
  const filePath = path.join(process.cwd(), 'package.json');
  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: 'application/json' });
  
  const formData = new FormData();
  formData.append('file', blob, 'package.json');
  
  try {
    const response = await fetch(`${API_URL}/api/upload`, {
      method: 'POST',
      body: formData
    });
    console.log(response.status);
    const text = await response.text();
    console.log(text.substring(0, 500));
  } catch (e) {
    console.error(e);
  }
}

testUpload();
