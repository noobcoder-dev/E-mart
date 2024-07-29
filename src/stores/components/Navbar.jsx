import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <div className="navSection">
    <div className="title">
        <h2>E-mart</h2>
    </div>
    <div className="search">
        <input type="text" placeholder='Search....' />
    </div>
    <div className="user">
        <div className="user-details">
            SignIN/SignUp
        </div>
        <div className="cart">
            Cart
        </div>
    </div>
  </div>
  <div className="subMenu">
    <ul>
        <Link to='mobiles'><li>Mobiles</li></Link>
        <Link to='/computer'><li>Computers</li></Link>
        <Link to='/watches'><li>Watches</li></Link>
        <Link to='/Mens'><li>Mens Wear</li></Link>
        <Link to='/woman'><li>woman Wear</li></Link>
        <Link to='/furniture'><li>Furniture</li></Link>
        <Link to='/kitchen'><li>Kitchen</li></Link>
        <Link to='/tvs'><li>Smart TVs</li></Link>
        <Link to='/acs'><li>AC's</li></Link>
        <Link to='/books'><li>Books</li></Link>
        <Link to='/speaker'><li>Speakers</li></Link>
    </ul>
  </div>
  </>
)
}

export default Navbar