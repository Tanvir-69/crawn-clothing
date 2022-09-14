import React from "react";
import './SignIn.scss';

import FormInput from '../form-component/FormInput'
import CustomButton from "../custom-button/CustomButton";
import { auth,signInWithGoogle } from "../../firebase/firebase.utility";
import { signInWithEmailAndPassword } from "firebase/auth";

// import { docRef } from '../../firebase/firestore.db';



const SignIn =()=>{
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handelChangeEmail =(event)=>(
        setEmail(event.target.value)     

    )
    const handelChangePassword =(event)=>(
        setPassword(event.target.value)

    )

    const handelSubmit=async(e)=>{     
            e.preventDefault();

            try{
                await signInWithEmailAndPassword(auth,email,password)
                setEmail('')
                setPassword('')

            }catch(error){
                console.log(error)
            }
            
}
       
    

    return(
        <div className="sign-in">
            <h1>I already have account</h1>
            <span>Sign in with your email and password</span> 
            <form onSubmit={handelSubmit}>
                <FormInput 
                name='email' 
                type='email' 
                value={email} 
                handleChange={handelChangeEmail}
                required 
                label='email'
                />
               
                <FormInput 
                name='password' 
                type='password' 
                value={password} 
                handleChange={handelChangePassword}
                required 
                label='password'
                />     

                <div className="button">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>                  
                        Sign In With Google
                        </CustomButton> 
                        {/* <CustomButton onClick={docRef} isGoogleSignIn>                  
                            test button
                        </CustomButton>  */}
                </div>           


            </form> 
        
        </div>
    )
}

export default SignIn;