import React from 'react';
import './App.css';

import { Routes, Route, Navigate  } from 'react-router-dom';



import HomePage from './Pages/Homepage/HomePage';
import ShopPage from './Pages/Shoppage/shoppage';
import Header from './Components/Header/Header';
import ContactPage from './Pages/Contact-page/Contactpage';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up-page/Sign-in-and-sign-up';

import { auth, createUserProfileDoc } from './firebase/firebase.utility';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector} from 'react-redux';
import {userAction} from './Redux/user/userAction'



const App = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state=>state.user.currentUser)
  
  React.useEffect(()=>{   
    onAuthStateChanged(auth, async userAuth =>{
      console.log('authFromAppJs:',userAuth)

      dispatch(userAction(userAuth))

      if(userAuth){
        await createUserProfileDoc(userAuth)
      }
        
    })
  })





  return (
    <div className="App">     
      <Header />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/signin' element={currentUser ? <Navigate to='/'/> : <SignInAndSignUpPage />} />
      {/* <Route path='/shop/hats' element={<HatsPage />} /> */}
      {/* <Route path='/shop/jackets' element={<JacketsPage />} /> */}
      <Route path='/*' element={<h1>Page Not Found</h1>} />
      </Routes>
     
    </div>
  )
}

export default App;
