import React from 'react'
import { womanData } from '../data/woman'

const WomanPage = () => {
  return (
    <div className="pageSection">
    {womanData.map((item)=>{
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

export default WomanPage