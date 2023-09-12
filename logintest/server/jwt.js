const jwt = require('jsonwebtoken');

// 시크릿 키 - 토큰을 서명할 때 사용됨
const secretKey = ''

// 사용자 정보 또는 페이로드
const user = {
    id: 123,
    username: 'exampleUser',
};

// jwt 토큰 생성 함수
function generateToken(user) {
    // JWT 토큰 생성
    // 1시간동안 유효한 토큰 생성
    const token = jwt.sign(user,secretKey, {expiresIn: '1h'});
    return token;
}

// 토큰 생성 예제
const token = generateToken(user);
console.log('JWT Token: ' + token);

// 토큰 검증 함수
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        // 검증에 성공하면 사용자 정보 반환
        return decoded;
    }catch (error){
        throw new Error('토큰 검증 실패');
    }
}

// 토큰 검증 예제
try {
    const decodedUser = verifyToken(token);
    console.log('Decoded User:', decodedUser);
} catch (error) {
    console.error(error.message);
}