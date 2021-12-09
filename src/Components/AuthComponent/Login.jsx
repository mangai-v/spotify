import React from 'react'
import Logo from '../../Pages/HeaderComponent/Logo'
import  './auth.css'
import LoginForm from './LoginForm'
const Login = () => {
    return (
        <section id="loginauthblock">
           <article>
               <Logo/><hr />
                 <div className="loginauthContent"><h4>To continue,log in to spotify</h4></div>

                 <button className="btn-facebook">CONTINUE WITH FACEBOOK</button>
                 <button className="btn-apple">CONTINUE WITH APPLE</button>
                 <button className="btn-google">CONTINUE WITH GOOGLE</button>
                 <button className="btn-number">CONTINUE WITH PHONE NUMBER</button>
                  <p className="loginorBlock">
                      <strong>OR</strong>
                  </p>
               <div className="loginformContent">
                   <LoginForm/>
               </div>
          
           </article>
        </section>
    )
}

export default Login
