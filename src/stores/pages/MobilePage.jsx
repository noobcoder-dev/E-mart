import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  return (
     <>
     <Navbar/>    
     <div className="pageSection">
     {mobileData.map((item)=>{
      return(
         <div>
         <Link to={`/Mobiles/${item.id}`}>
         <div className="pageImage">
                        
            <img src={item.image} alt="" />

         </div>
         </Link>

         <div className="proModel">
         {item.company},{item.model}
         </div>
         </div>
      )    
     })

     }
 </div>
     </>
  )
}

export default MobilePage