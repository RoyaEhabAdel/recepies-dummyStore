
import '../App.css';
import React, { useState} from 'react'

const CardInfo = ({item, resData}) => {
  
  const [readStatus, setReadStatus] = useState(false)
  
  

function handleReadInfo(){
  setReadStatus(!readStatus)
}
    
  return (
    <div>
      
                <div key={item.id} className='card'>
                    <div className='images'>
                    <img alt='' src={item.image} />
                    </div>
                    <h3>{item.name}</h3>
                    <div className='details'>
                        <div>
                        <h4>Calories/Serving :</h4> <span>{item.caloriesPerServing}</span>
                        </div>
                        <div>
                        <h4>Cooking Time :</h4> <span>{item.cookTimeMinutes} min</span>
                        </div>
                        <div>
                        <h4>Difficulty :</h4> <span>{item.difficulty}</span>
                        </div>
                        <div>
                        <h4>Cuisine :</h4> <span>{item.cuisine}</span>
                        </div>
                    </div>
                    <div className={readStatus? "more": "less"}>
                    <div>
                        <h4>Ingredients:</h4>
                        <ul>
                            {
                                resData && item.ingredients && item.ingredients.map(ingredient =>{
                                    return <li>{ingredient}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h4>Instructions:</h4>
                        <ul>
                            {
                                resData && item.instructions && item.instructions.map(instruction =>{
                                    return <li>{instruction}</li>
                                })
                            }
                        </ul>
                    </div>
                    </div>
                    <div className='btn'>
                    <button onClick={handleReadInfo}>{readStatus? "Less" : "More"}</button>
                    </div>
                </div>
            
      </div>
  )
}

export default CardInfo
