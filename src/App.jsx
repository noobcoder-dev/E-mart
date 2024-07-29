import React, { Fragment } from 'react'
import './App.css'
import Landing from './stores/pages/Landing'
import { Routes,Route } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchesPage from './stores/pages/WatchesPage'
import MensPage from './stores/pages/MensPage'
import WomanPage from './stores/pages/WomanPage'
import Furniturepage from './stores/pages/Furniturepage'
import AcsPage from './stores/pages/AcsPage'
import KitchenPage from './stores/pages/KitchenPage'
import BooksPage from './stores/pages/BooksPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import FridgePage from './stores/pages/FridgePage'
import MobileSinglePage from './stores/singlePage/MobileSinglePage'
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<ComputerPage/>}/>
        <Route path='/watches' element={<WatchesPage/>}/>
        <Route path='/Mens' element={<MensPage/>}/>
        <Route path='/woman' element={<WomanPage/>}/>
        <Route path='/furniture' element={<Furniturepage/>}/>
        <Route path='/acs' element={<AcsPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/speaker' element={<SpeakerPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/Mobiles/:id' element={<MobileSinglePage/>}/>

      </Routes>
    
    </div>
  )
}

export default App