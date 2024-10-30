const fs = require('fs');
const path = require('path');

const dir = './src/app'; // ที่อยู่โปรเจกต์ของคุณ

function convertToStandalone(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // เช็คว่าเป็น component หรือไม่
  if (content.includes('@Component')) {
    // เพิ่ม standalone property และ imports ที่จำเป็น
    const updatedContent = content
      .replace(/@NgModule\s*\{[^}]*\}/, '') // ลบ @NgModule
      .replace(/@Component\(/, '@Component({ standalone: true, imports: [CommonModule],'); // เพิ่ม standalone

    fs.writeFileSync(filePath, updatedContent);
    console.log(`Converted ${filePath} to standalone.`);
  }
}

// ค้นหาไฟล์ทั้งหมดใน directory
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.component.ts')) {
    convertToStandalone(path.join(dir, file));
  }
});
