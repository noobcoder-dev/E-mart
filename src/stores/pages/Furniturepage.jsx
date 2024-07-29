import React from 'react'
import { furnitureData } from '../data/furniture'

const Furniturepage = () => {
  return (
    <div className="pageSection">
    {furnitureData.map((item)=>{
     return(
        <div>
        <div className="pageImage">
            <img src={item.image} alt="" />
        </div>
        <div className="proModel">
        {item.company},{item.model}
        </div>
        </div>
     )    
    })

    }
</div>
  )
}

export default Furniturepage