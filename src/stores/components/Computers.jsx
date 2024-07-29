import React from 'react'
import {computerData} from '../data/computers'

const firstFiveImages = computerData.slice(0,5);
const Computers = () => {
  return (
  <>
  <h2>Computers</h2>
  <div className='proSection'>{
        firstFiveImages.map((item)=>{
            return(
                <div className='imgbox'>
                    <img className="proImage" src={item.image} alt="" />
                </div>
            )
        })}
  </div>
  </>  
        
  
  )
}

export default Computers