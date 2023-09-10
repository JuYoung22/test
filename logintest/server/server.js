
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
  // 요청 처리 로직을 여기에 작성합니다.
  // 클라이언트로 응답을 보내야 합니다.
  // res.json(...) 또는 res.send(...) 등을 사용하세요.
  const { inputId, inputPw } = req.body;
  res.json({ inputId, inputPw });
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
