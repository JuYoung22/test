import React, { useState } from 'react';
import Modal from './modal';

import './login.css';
import axios from 'axios';

function Login(){
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // 확인용 모달창
    const [openModal, setOpenModal] =useState(false);
    // 응답데이터 메세지 저장
    const [modalMessage, setModalMessage] = useState('');

    // input data 의 변화가 있을 때마다 value 값을 변경해서
    // useState setInputId와 setInputPw에 저장
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login',
            {
                inputId,
                inputPw,
            });
            if (response.status===200){
                // 서버로부터 응답을 받았을 때 실행할 코드
                console.log('로그인 성공',response.data);
                
                // 확인용 모달창
                setOpenModal(true);
                // 응답데이터를 상태 변수에 저장.
                setModalMessage(response.data.inputId+'님, 로그인 성공');
            }else {
                console.log('로그인 실패');
            }
        }catch (error){
                console.log('Error: ' + error);
            }
        }

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
                        로그인 
                </button>              
            </div>
            {openModal && 
                // 모달 컴포넌트에 응답 데이터 전달 + 모달창 띄우기
            <Modal modalMessage={modalMessage} setOpenModal={setOpenModal}/>}
            
        </div>
    )
}

export default Login;