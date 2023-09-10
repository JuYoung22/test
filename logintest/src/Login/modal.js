import React from "react";
import './login.css';

// export default function Modal({setOpenModal}) {
//     const closeModal = () => {
//         setOpenModal(false);
//     };

//     return(
//         <div className="modalStyle">
//             <button onClick={closeModal}> 닫기 </button>
//         </div>
//     );
// }
function Modal({ setOpenModal, modalMessage }) {
    return (
      <div className="modalStyle">
          {/* 응답데이터를 출력 */}
          <p>{modalMessage}</p>
          <button onClick={() => setOpenModal(false)}>닫기</button>
        </div>
    );
  }
  

  export default Modal;