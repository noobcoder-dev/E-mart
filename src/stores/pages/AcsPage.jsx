import React from 'react'
import { acData } from '../data/ac'

const AcsPage = () => {
  return (
    <div className="pageSection">
    {acData.map((item)=>{
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

export default AcsPage