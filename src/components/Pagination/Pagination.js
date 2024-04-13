"use client"
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  } 
  return (
    <div className="grid grid-cols-4">
        <div></div>
        <div></div>
        <div></div>
              <div className="flex flex-col items-end">

        
         <div className="flex flex-row items-center justify-evenly mr-8">
         <button 
         style={{display:currentPage === 1 || totalPages ===1?'none':''}}
         onClick={()=>onPageChange(currentPage-1)}
                                className="m-3 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            >
                                
                                Prev
                            </button>
                            <button
                            style={{display:currentPage === totalPages || totalPages ===1?'none':''}} 
                                className=" m-3 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
         onClick={()=>onPageChange(currentPage+1)}
                            
                            >
                                Next
                            </button>
         </div>
      </div>
    </div>
  );
};

export default Pagination;