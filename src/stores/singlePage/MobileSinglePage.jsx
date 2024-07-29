import React from 'react'
import { useParams } from 'react-router-dom'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'

const mobileSinglePage = () => {
 const {id} =useParams()
 const product = mobileData.find((item)=>item.id=== id)

    return (
   <>
   <Navbar/>
    <div className="ind-page">
    <div className="ind-img">
    <img src={product.image} alt="" />
    </div>
    <div className="ind-details space">
    <div className="ind-company space">
        <h2>{product.company}</h2>
    </div>
    <div className="ind-model space">
    <h3>{product.model}</h3>
    </div>
    <div className="ind-price space">
    <h2>{product.price}</h2>
    </div>
    <div className="ind-description space">
    <p>{product.description}</p>
    </div>
    <button>Add to Cart</button>
    </div>
</div>
   </>
  )
}

export default mobileSinglePage