import React from 'react';
import './App.css';

import { Routes, Route,Link } from 'react-router-dom';

import HomePage from './Pages/Homepage/HomePage';
import ShopPage from './Pages/Shoppage/shoppage';
import Header from './Components/Header/Header';
import ContactPage from './Pages/Contact-page/Contactpage';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up-page/Sign-in-and-sign-up';

import { auth, createUserProfileDoc } from './firebase/firebase.utility'
import { onAuthStateChanged } from "firebase/auth";


const HatsPage =()=>(
 
  <Link style={{color:'red'}} to='/shop'>Hats page</Link> 
)

const App = () => {
  const [userToken,setUserToken] = React.useState({})

  
  React.useEffect(()=>{
    
    onAuthStateChanged(auth, async userAuth =>{
      console.log('authFromAppJs:',userAuth)
      // const userToken = userAuth.accessToken
      if(userAuth){
        await createUserProfileDoc(userAuth)
        setUserToken(userAuth.accessToken)
      }else{
        setUserToken(userAuth)
      }
        
          
      // console.log('aauth:',userAuth.accessToken)
    })
  })


      // console.log('test:',test.testTex)


  return (
    <div className="App">     
      <Header currentUser={userToken}/>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/signin' element={<SignInAndSignUpPage />} />
      <Route path='/shop/hats' element={<HatsPage />} />
      {/* <Route path='/shop/jackets' element={<JacketsPage />} /> */}
      <Route path='/*' element={<h1>Page Not Found</h1>} />
      </Routes>
     
    </div>
  )
}

export default App;
