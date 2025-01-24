const fs = require('fs');
const path = require('path');

const dir = './src/app/pages'; // ที่อยู่โปรเจกต์ของคุณ

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

function findComponentsInDir(dirPath) {
  // อ่านไฟล์ใน directory ปัจจุบัน
  fs.readdirSync(dirPath).forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    // ถ้าเป็น directory ให้เรียกใช้งานฟังก์ชันนี้ซ้ำ
    if (stat.isDirectory()) {
      findComponentsInDir(fullPath);
    } else if (file.endsWith('.component.ts')) {
      // ถ้าเป็น component ให้แปลง
      convertToStandalone(fullPath);
    }
  });
}

// เริ่มค้นหา components ใน pages directory
findComponentsInDir(dir);
