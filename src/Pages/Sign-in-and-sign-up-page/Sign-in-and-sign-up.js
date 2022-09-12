import React from "react";
import './Sign-in-and-sign-up.scss'

import SignIn from "../../Components/Sign-in/SignIn";
import SignUp from "../../Components/Sign-Up/SignUp";

const SignInAndSignUpPage =()=>(
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;