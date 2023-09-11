const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const connection  = require('./dbConfig');



app.use(express.json());
app.use(cors());

// 클라이언트로부터의 POST 요청 처리
app.post('/join', (req, res) => {
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

app.post('/login',(req, res) => {
  const { inputId, inputPw } = req.body;
  // MySQL 쿼리 실행
  const query = `SELECT * FROM testUser WHERE username = ?`;
  connection.query(query, [inputId], (err, result) => {
    if (err) {
      console.error('쿼리오류:', err);
      res.status(500).json({ message: '데이터베이스 오류'});
      return;
    }
    if (result.length === 0) {
      // 사용자가 존재하지 않는 경우
      res.status(401).json({ message: '존재하지 않는 이용자 입니다.'});
    }
    else {
      const user = result[0];
      if (user.password === inputPw){
        // 패스워드가 일치하는 경우
        res.status(200).json({ message: '로그인 성공', usernames: [user.username] });
      }
      else {
        // 패스워드가 일치하지 않는 경우
        res.status(401).json({ message: '패스워드가 일치하지 않습니다.' });
      }
    }
  });
});

app.get('/userData', (req, res) => {
  // MySQL 쿼리 실행
  const query = `SELECT username FROM testUser`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error('쿼리오류:',err);
      res.status(500).json({message: '데이터베이스 오류'});
      return;
    }
    //쿼리 결과에서 사용자명 목록을 추출한 후 클라이언트로 전송
    const usernames = result.map((result)=> result.usernames);
    res.status(200).json({ usernames });
  });

});
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
