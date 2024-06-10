import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  purchas_book  from './BookAction'

function BookContainer() {
const noOfBooks =  useSelector(state => state.NumberOfBooks)
const dispatch =  useDispatch()
  return (
    <>
      <div>BookContainer</div>
      <h2>NO Of Books - {noOfBooks}</h2>
      <button onClick={()=>(dispatch(purchas_book()))}>buy Book</button>
    </>
  );
}

export default BookContainer;
