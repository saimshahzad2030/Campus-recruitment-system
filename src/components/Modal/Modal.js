import React from 'react'

const Modal = ({loading}) => {
    return (
        loading && (
          <div className={`fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 ${style.main}`}>
            <div className="rounded-lg bg-white p-8">
              <div className="flex justify-center mb-4">
                <div className="rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 animate-spin"></div>
              </div>
              <p className="text-center">Loading...</p>
            </div>
          </div>
        )
      );
}

export default Modal