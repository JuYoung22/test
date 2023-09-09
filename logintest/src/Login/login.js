import React, { useState, useEffect } from 'react';
import Modal from './modal';

import './login.css';
import axios from 'axios';

function Login(){
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // 확인용 모달창
    const [openModal, setOpenModal] =useState(false);

    // input data 의 변화가 있을 때마다 value 값을 변경해서
    // useState setInputId와 setInputPw에 저장
    const handleInputId = (e) => {
        setInputId(e.target.value)
    };
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    };

    const onClickLogin = () => {
        console.log('onClickLogin');
        setOpenModal(true);
    };

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(()=> {
        axios.get('/userInform/login')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return(
        <div className='background'>
            <div className='backgroundBox'>
                <input className='inputstyle'
                        type='text'
                        name='inputId'
                        value={inputId}
                        onChange={handleInputId}/>

                <input className='inputstyle'
                        type='text'
                        name='inputPw'
                        value={inputPw}
                        onChange={handleInputPw}/>

                <button className='buttonStyle'
                        onClick={onClickLogin}> 
                        로그인 
                </button>              
            </div>
            {openModal && <Modal setOpenModal={setOpenModal} />}
        </div>
    )
}

export default Login;