import React, { useState } from 'react'
import {Link,withRouter} from 'react-router-dom'
import {toast} from 'react-toastify'
import firebase from '../../firebase'
const SignUpForm = ({history}) => {
    let[state,setState]=useState({
email:'',email1:'',password:'',profile_name:'',month:'',
dd:'',yyyy:'',gender:'',loading:false
    })
    let{email,email1,password,profile_name,month,dd,yyyy,gender,loading}=state
    let handleChange =e=>{
        let{name,value}=e.target
        setState({...state,[name]:value})
    }
  let handleSubmit =async e=>{
      e.preventDefault()
      try{
          console.log(state)
          setState({loading:true})
          if(email===email1){
              let USER_DATA=await firebase.auth().createUserWithEmailAndPassword(email,password)
              let confirmMessage=`A verification message has been sent to ${email} and verify and login`
              USER_DATA.user.sendEmailVerification()
              toast.info(confirmMessage)
              //window.location.assign("/login")
              history.push("/Login")
            }
            else{
            
                toast.error("confirm email is not matching")
            }

      }
      catch(error){
          toast.error(error.message)
      }
    //   setState({loading:false})
  }
    return (
        <div>
           <h2>Sign up with your email address</h2>
           <form onSubmit={handleSubmit}>
        <div className="form-group"><label htmlFor="email">What's your email?</label>
              <input type="email" className="form-control" 
          name="email" id="email" required placeholder="enter your email" value={email} onChange={handleChange}/>
       </div>
        <div className="form-group"><label htmlFor="email1">Confirm your email</label>
        <input type="email" className="form-control" 
         name="email1" id="email1" required placeholder="enter your email again" value={email1} onChange={handleChange}/>
        </div>

        <div className="form-group"><label htmlFor="password">Create a password</label>
        <input type="password" className="form-control" 
         name="password" placeholder="create a password" value={password} onChange={handleChange}/>
        </div>

        <div className="form-group"><label htmlFor="profile_name">What should we call you?</label>
        <input type="text" className="form-control" 
         name="profile_name" id="profile_name" placeholder="Enter a profile name" value={profile_name} onChange={handleChange}/>

        </div>

    


<div className="form-group"><label htmlFor="date">What's your date of birth?</label>
        <div className="dateBlock">
        <input type="text" name="month" required placeholder="month" value={month} onChange={handleChange}/>
        <input type="text" name="dd"required placeholder="DD" value={dd} onChange={handleChange}/>
        <input type="text" name="yyyy" required placeholder="YYYY" value={yyyy} onChange={handleChange}/>
        </div>
        </div>
        <div className="form-group">
            
            
            <label htmlFor="">What's your gender</label>
            <main className="genderBlock" value={gender} onChange={handleChange}>
           <span>
               <input type="radio" name="gender" value="male"/>Male
               </span>
            <span>
                 <input type="radio" name="gender" value="female"/>Female
                 </span>
           <span>
               <input type="radio" name="gender" value="non-binary"/>Non-binary
           </span>
            </main>
     </div>
        
        
        <div className="form-group"><label htmlFor="checkbox"></label>
        <input type="checkbox" name="text"/>
        <span className="checkboxContent">Share my registration data with Spotify's content providers for marketing purposes.</span>
        </div>

        <div className="form-group">
            <p className="copyWriteText"><p>By clicking on sign-up, you agree to Spotify's Terms and Conditions of Use.</p>
            
        <br /> To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's Privacy Policy.</p>
        </div>
        
        <div className="form-group btn-group">
            <button>{loading===true?"loading....":"signup"}</button>
        </div>

 <div className="form-group">
  <p className="last">Have an account? <Link to="/ login">Login</Link></p>
 </div>
           </form>
        </div>
    )
}

export default withRouter(SignUpForm) 
