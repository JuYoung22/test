import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from './modal';

import './login.css';
import axios from 'axios';

const URL = 'http://localhost:3001';

function Join(){
    const navigate = useNavigate();
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // 확인용 모달창
    const [openModal, setOpenModal] =useState(false);
    // 응답데이터 메세지 저장
    const [modalMessage, setModalMessage] = useState('');

    // input data 의 변화가 있을 때마다 value 값을 변경해서
    // useState setInputId와 setInputPw에 저장
    // 회원가입 코드
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL+'/join',
            {
                inputId,
                inputPw,
            });
            if (response.status===200){
                // 서버로부터 응답을 받았을 때 실행할 코드
                console.log('성공',response.data);
                
                // 확인용 모달창
                setOpenModal(true);
                // 응답데이터를 상태 변수에 저장.
                setModalMessage(response.data.inputId+'님, 안녕하세요');
            }else {
                console.log('회원가입 실패');
            }
        }catch (error){
                console.log('Error: ' + error);
            }
        }

    // 로그인 코드
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // 클라이언트에서 입력한 ID와 PW를 서버로 보냅니다.
            const response = await axios.post(URL+'/login',
            {
                inputId, 
                inputPw
            });
            if (response.status === 200) {
                const usernames = response.data.usernames;
                // 서버에서 로그인 성공 메시지를 받으면 성공 메시지를 표시합니다.
                console.log('로그인 성공');
                console.log('사용자명 목록:', usernames);

                // 로그인 성공시
                localStorage.setItem('isLogin', true); // 로그인 여부를 저장
                localStorage.setItem('userId','사용자Id'); //사용자 로그인 저장

                // 로그인 성공 후 ID를 전달하며 profile 페이지로 이동
                    navigate('/profile', { state: { id: inputId } });
            }
        }catch(error){
            console.log('Error: ' + error);
        }
        
    };


    return(
        <div className='background'>
            <div className='backgroundBox'>
                <input className='inputstyle'
                        type='text'
                        name='inputId'
                        value={inputId}
                        onChange={(e)=> setInputId(e.target.value)}/>

                <input className='inputstyle'
                        type='text'
                        name='inputPw'
                        value={inputPw}
                        onChange={(e)=> setInputPw(e.target.value)}/>

                <button className='buttonStyle'
                        type='submit'
                        onClick={handleSubmit}> 
                        회원가입 
                </button>
                <button className='buttonStyle'
                        onClick={handleLogin}>로그인</button>              
            </div>
            {openModal && 
                // 모달 컴포넌트에 응답 데이터 전달 + 모달창 띄우기
            <Modal modalMessage={modalMessage} setOpenModal={setOpenModal}/>}
        </div>

    )
}

export default Join;