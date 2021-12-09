import React from 'react'
import Logo from '../../Pages/HeaderComponent/Logo'

import './auth.css'
import SignUpForm from './SignUpForm'
const SignUp = () => {
    return (
        <section id="authblock">
            <article>
                <Logo/>
                <div className="authContent">
                    <h1>Sign up for free to start listening</h1>
                    <button>Sign up with facebook</button>
                    <p className="orBlock">
                        <strong>or</strong>
                    </p>
                </div >
                <div className="formContent"><SignUpForm/></div>
            
            </article>
        </section>
    )
}

export default SignUp
