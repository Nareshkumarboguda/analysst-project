import React from 'react'
import './Pagination.css'

export default function Pagination({totalPages, pageHandler, handleSwitch, pageNumber}) {
   

    // page numbers to display 
    let pageNumbers =[];
    for(let i =1; i<= totalPages; i++){
        pageNumbers.push(i);
    }
  return (
    <div className='pageNumbersBox'>
        <button className='nums' onClick={()=>handleSwitch(-1)}>&lt;</button>
            {
                pageNumbers.map((number,i)=><button key ={i}className={number === pageNumber ? 'selected-page' : 'nums'} onClick={()=>pageHandler(number)} >{number}</button>)
            }
        <button className='nums' onClick={()=>{ if(pageNumber < pageNumbers.length) {handleSwitch(+1)} console.log(pageNumber < pageNumbers.length) }}>&gt;</button>
    </div>
  )
}
