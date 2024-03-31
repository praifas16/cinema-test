const express = require('express');
const mysql = require('mysql');

const app = express();

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Scinema'
});

// เชื่อมต่อกับฐานข้อมูล
connection.connect((err) => {
  if (err) {
    console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ MySQL:', err);
    return;
  }
  console.log('เชื่อมต่อกับ MySQL สำเร็จ');
});

// สร้าง Endpoint สำหรับการดึงข้อมูลหนังทั้งหมด
// สร้าง Endpoint สำหรับการดึงข้อมูลจากตาราง Scinema
app.get('/api/Scinema', (req, res) => {
    connection.query('SELECT * FROM Scinema', (error, results) => {
      if (error) {
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
      } else {
        res.json(results);
      }
    });
  });
  

// ตั้ง port ให้ Express.js ทำงาน
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์กำลังทำงานบนพอร์ต ${PORT}`);
});
