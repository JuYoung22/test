const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const connection  = require('./dbConfig');



app.use(express.json());
app.use(cors());

// 클라이언트로부터의 POST 요청 처리
app.post('/login', (req, res) => {
  const { inputId, inputPw } = req.body;

  // MySQL 쿼리 실행
  const query = `INSERT INTO testUser (username, password) VALUES (?, ?)`;
  connection.query(query, [inputId, inputPw], (err, result) => {
    if (err) {
      console.error('쿼리 오류:', err);
      res.status(500).json({ message: '데이터베이스 오류' });
      return;
    }
    console.log('데이터가 성공적으로 삽입되었습니다.');
    res.status(200).json({ message: '데이터가 성공적으로 삽입되었습니다.' });
  });
});


app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
