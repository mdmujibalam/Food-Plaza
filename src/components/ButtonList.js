import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {
  const buttons = ["Filter","Sort By","Ratings 4.0+","Pure Veg","Rs. 300-Rs. 600","Less then Rs. 300"]  
  return (
    <div className=''>
        {
            buttons.map((button,index) => (
                <Buttons key={index} data = {button} />
            ))
        }
    </div>
  )
}

export default ButtonList