import React from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

function Profile({ modalMessage }) { // 여기에서 props 이름을 `Profile` 컴포넌트에서 사용한 대로 변경합니다.
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/'); // 함수를 호출하여 '/'로 이동합니다.
    };
    console.log(modalMessage);

    return (
        <div className='background'>
            <div className='porflieBox'>
                {/* 모달 메시지 출력 */}
                <p>테스트:  {modalMessage}</p>
                {/* 나머지 프로필 정보를 여기에 추가하세요 */}
                <button onClick={handleNavigate}>홈으로</button>
            </div>
        </div>
    );
}

export default Profile; // 파일 이름과 컴포넌트 이름을 일치시켰습니다.
