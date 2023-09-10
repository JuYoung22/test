
import React from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

function Modal({ setOpenModal, modalMessage }) {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigate('/profile'); // 함수를 호출하여 '/profile'로 이동합니다.
    };
    
    return (
      <div className="modalStyle">
          {/* 응답 데이터를 출력 */}
          <p>{modalMessage}</p>
          <button onClick={() => setOpenModal(false)}>닫기</button>
          <button onClick={handleNavigate}>프로필 가기</button>
      </div>
    );
}

export default Modal;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import './login.css';

// function Modal({ setOpenModal, modalMessage }) {
//     const navigate = useNavigate();
    
//     const handleNavigate =() => {
//         navigate = ('/profile');
//     };
//     return (
//       <div className="modalStyle">
//           {/* 응답데이터를 출력 */}
//           <p>{modalMessage}</p>
//           <button onClick={() => setOpenModal(false)}>닫기</button>
//           <button onClick={handleNavigate}>프로필 가기</button>
//         </div>
//     );
//   }
  

//   export default Modal;