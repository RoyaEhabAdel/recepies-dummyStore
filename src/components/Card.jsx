
import '../App.css'
import CardInfo from './CardInfo';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Card = () => {
  const [resData,setResData] = useState([]);
  const [Total, setTotal] = useState(1)

  const items = 3;
  const [current,setCurrent] = useState(1);
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items


  useEffect(() =>{
  const getData = async () => {
      try{
      const response = await axios.get(`https://dummyjson.com/recipes?limit=${items}&skip=${startIndex}`);
      const recipes = response.data.recipes;
      const total = Math.ceil( response.data.total / items)
      setTotal(total)
      setResData(recipes)
      console.log(recipes)
      
      } catch(err) {
          console.log(err)
      }
  }
  getData()
}, [startIndex,items]);
    
console.log(current)
  return (
    <div>
        <div className='heading'>
            <h1>Dummy Recepies</h1>
        </div>
        <div className='container'>
        { resData && resData.length>0 && resData.map(item => {
            return(
            <CardInfo item={item} />
            )
            })
            }
            </div>
            <div className='btns'>
              {
                Array.from({length:Total}, (_, i)=> i+1).map(page=>(
                  <button key={page} onClick={() => setCurrent(page)} disabled={page === current}>
                  {page}
                  </button>
                ))
              }
            </div>
 
    </div>
  )
}

export default Card
