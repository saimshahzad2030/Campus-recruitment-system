import React from 'react'
import style from './Modal.module.css'
const Modal = ({loading}) => {
    return (
        loading && (
          <div className={`w-screen h-screen flex justify-center items-center bg-white  ${style.main}`}>
            <div className="rounded-lg bg-white p-8">
              <div className="flex justify-center mb-4"> 
  <div class="rounded-full h-12 w-12 border-t-4 border-blue-500 animate-spin"></div>
 
              </div>
              <p className="text-center">Loading...</p>
            </div>
          </div>
        )
      );
}

export default Modal