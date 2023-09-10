const mysql = require('mysql');

// MySQL 연결 정보
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test',
  };
// MySQL 연결 생성
  const connection = mysql.createConnection(dbConfig);

// MySQL 연결
connection.connect((err)=>{
    if (err) {
        console.error('연결오류:',err);
        throw err;
    }
    console.log('Connection MySQL');
});

// 사용자 테이블 생성 SQL
const createTableSQL = `
CREATE TABLE IF NOT EXISTS testUser (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
)
`;

// 테이블 생성
connection.query(createTableSQL, (err, result) => {
if (err) {
  console.error('테이블 생성 오류:', err);
  throw err;
}
console.log('테이블이 성공적으로 생성되었습니다.');
});


module.exports = connection ;