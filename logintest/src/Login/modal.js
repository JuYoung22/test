import React from "react";
import './login.css';

export default function Modal({setOpenModal}) {
    const closeModal = () => {
        setOpenModal(false);
    };

    return(
        <div className="modalStyle">
            <button onClick={closeModal}> 닫기 </button>
        </div>
    );
}