import React from "react";

const Table = ({
  columns,
  data,
  currentPage,
  fieldsToDisplay,
  buttonStyles,
  clickHandler,
  buttonText,
  Buttons,
  buttonsStyles,
  clickHandlers,
  tableType
}) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300 mb-12">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className={`px-4 py-2 bg-gray-700 text-gray-50 border text-2xl `}
              key={column}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
      {tableType && data.slice(currentPage * 10 - 10, currentPage*10+10).map((application) => (
          <tr key={application._id}>
            {fieldsToDisplay.map((field) => (
              <td
                key={application._id}
                className={`px-4 py-4 border text-center ${
                  field === "status"
                    ? application.status === "reject"
                      ? "text-red-600"
                      : application.status === "pending"
                      ? "text-blue-600"
                      : application.status === "approve"
                      ? "text-green-500"
                      : ""
                    : ""
                }`}
              >
                {field === "status"
                  ? application.status === "approve"
                    ? "approved"
                    : application.status === "reject"
                    ? "rejected"
                    : application.status
                  : application[field]}
              </td>
            ))}

            <td
              className={`px-4 py-4 border text-center `}
              style={{ display: buttonText === undefined ? "none" : "" }}
            >
              <button
                className={buttonStyles}
                onClick={() => { 

                  {
                    clickHandler.length === 1
                      ? buttonText === "Hire"
                        ? clickHandler(application)
                        : clickHandler(application._id)
                      : clickHandler(application._id, application.email);
                  }
                }}
              >
                {buttonText}
              </button>
            </td>
            <td
              className="flex flex-row items-center justify-evenly"
              style={{ display: buttonText === undefined ? "" : "none" }}
            >
              {Buttons &&
                Buttons.map((button, index) => (
                  <button
                    key={index}
                    className={buttonsStyles[index]}
                    onClick={() => {
                      clickHandlers[index](application._id, button); 
                    }}
                  >
                    {button}
                  </button>
                ))}
            </td>
          </tr>
        ))}
        {! tableType && data.map((application) => (
          <tr key={application._id}>
            {fieldsToDisplay.map((field) => (
              <td
                key={application._id}
                className={`px-4 py-4 border text-center ${
                  field === "status"
                    ? application.status === "reject"
                      ? "text-red-600"
                      : application.status === "pending"
                      ? "text-blue-600"
                      : application.status === "approve"
                      ? "text-green-500"
                      : ""
                    : ""
                }`}
              >
                {field === "status"
                  ? application.status === "approve"
                    ? "approved"
                    : application.status === "reject"
                    ? "rejected"
                    : application.status
                  : application[field]}
              </td>
            ))}

            <td
              className={`px-4 py-4 border text-center `}
              style={{ display: buttonText === undefined ? "none" : "" }}
            >
              <button
                className={buttonStyles}
                onClick={() => { 

                  {
                    clickHandler.length === 1
                      ? buttonText === "Hire"
                        ? clickHandler(application)
                        : clickHandler(application._id)
                      : clickHandler(application._id, application.email);
                  }
                }}
              >
                {buttonText}
              </button>
            </td>
            <td
              className="flex flex-row items-center justify-evenly"
              style={{ display: buttonText === undefined ? "" : "none" }}
            >
              {Buttons &&
                Buttons.map((button, index) => (
                  <button
                    key={index}
                    className={buttonsStyles[index]}
                    onClick={() => {
                      clickHandlers[index](application._id, button); 
                    }}
                  >
                    {button}
                  </button>
                ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
