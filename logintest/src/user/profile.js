import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './login.css';

function Profile() { 
    // URL 파라미터로부터 ID를 받아옵니다.
    const location = useLocation();
    const { id } = location.state;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/'); // 함수를 호출하여 '/'로 이동합니다.
    };


    return (
        <div className='background'>
            <div className='porflieBox'>
                <p> 로그인한 사용자: {id} </p>
                <button onClick={handleNavigate}>홈으로</button>
            </div>
        </div>
    );
}

export default Profile; // 파일 이름과 컴포넌트 이름을 일치시켰습니다.
