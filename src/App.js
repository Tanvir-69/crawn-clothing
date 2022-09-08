import React from 'react';
import './App.css';

import { Routes, Route,Link } from 'react-router-dom';

import HomePage from './Pages/Homepage/HomePage';
import ShopPage from './Pages/Shoppage/shoppage';


const HatsPage =()=>(
 
  <Link style={{color:'red'}} to='/shop'>Hats page</Link>
  

)

const App = () => {
  
  return (
    <div className="App">
      {/* <ShopPage /> */}
      
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/shop/hats' element={<HatsPage />} />
      {/* <Route path='/shop/jackets' element={<JacketsPage />} /> */}
      <Route path='/*' element={<h1>Page Not Found</h1>} />
      </Routes>
     
    </div>
  )
}

export default App;
