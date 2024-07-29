import React from 'react'
import { menData } from '../data/men'

const MensPage = () => {
  return (
    <div className="pageSection">
    {menData.map((item)=>{
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

export default MensPage