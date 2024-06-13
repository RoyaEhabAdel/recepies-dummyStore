
import '../App.css'
import CardInfo from './CardInfo';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Card = () => {
  const [resData,setResData] = useState([]);

  const items = 4;
  const [current,setCurrent] = useState(1);
  const NbPage = Math.ceil(resData.length / items);
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items

  const DataPerPage = resData.slice(startIndex,endIndex)

  useEffect(() =>{
  const getData = async () => {
      try{
      const response = await axios.get('https://dummyjson.com/recipes');
      const recipes = response.data.recipes;
      setResData(recipes)
      console.log(recipes)
      } catch(err) {
          console.log(err)
      }
  }
  getData()
}, []);
    
  return (
    <div>
        <div className='heading'>
            <h1>Dummy Recepies</h1>
        </div>
        <div className='container'>
        { resData && DataPerPage.map(item => {
            return(
            <CardInfo item={item} />
            )
            })
            }
            </div>
            <div className='btns'>
              {
                Array.from({length:NbPage}, (_, i)=> i+1).map(page=>{
                  return <button onClick={()=> setCurrent(page)}>{page}</button>
                })
              }
            </div>
 
    </div>
  )
}

export default Card