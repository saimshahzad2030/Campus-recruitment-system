import React from "react";
import style from "./Alert.module.css";
const Alert = ({
  alertText,
  confirmButtonColor,
  confirmClickHandler,
  cancelClickHandler,
}) => {
  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ${style.main} z-40`}
    >
      <div className="fixed inset-0 bg-white transition-opacity"></div>
      <div className="bg-white p-4 rounded shadow-md transform transition-all">
        <p className="text-lg text-gray-800 mb-4">{alertText}</p>
        <div className="flex justify-center">
          <button
            onClick={confirmClickHandler}
            className={`${confirmButtonColor} text-white font-bold py-2 px-4 rounded mr-4`}
          >
            Confirm
          </button>
          <button
            onClick={cancelClickHandler}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
