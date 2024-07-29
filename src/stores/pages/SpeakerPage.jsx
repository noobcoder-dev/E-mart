import React from 'react'
import { speakerData } from '../data/speaker'

const SpeakerPage = () => {
  return (
    <div className="pageSection">
    {speakerData.map((item)=>{
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

export default SpeakerPage