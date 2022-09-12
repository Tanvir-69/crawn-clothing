import React from 'react';
import './SignUp.scss';

import FormInput from '../form-component/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {auth, createUserProfileDoc} from '../../firebase/firebase.utility'
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () =>{
    const [displayName, setDisplayName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const handleChangeDisplayName =(e)=>{
        setDisplayName(e.target.value)      
    }
    const handleChangeEmail =(e)=>{
        setEmail(e.target.value)      
    }
    const handleChangePassword =(e)=>{
        setPassword(e.target.value)      
    }
    const handleChangeConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value)       
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert('password do not match')
            return;
        }

        try{
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            ).then(async (userCre)=>{
                const user = userCre.user
                console.log('userCreateData',user)
                await createUserProfileDoc(user,{displayName});
            })
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')

        }catch(error){
            console.error(error)
        }
    }
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput 
            name='display Name'
            type='text'
            required
            value={displayName}
            handleChange={handleChangeDisplayName}
            label='display name'
            />
            <FormInput 
            name='email'
            type='email'
            required
            value={email}
            handleChange={handleChangeEmail}
            label='email'
            />
            <FormInput 
            name='password'
            type='password'
            required
            value={password}
            handleChange={handleChangePassword}
            label='password'
            />
            <FormInput 
            name='confirm password'
            type='password'
            required
            value={confirmPassword}
            handleChange={handleChangeConfirmPassword}
            label='confirm password'
            />

            <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;