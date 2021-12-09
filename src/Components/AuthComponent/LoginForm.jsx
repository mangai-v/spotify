import React, { useState } from 'react'
import { Link ,withRouter} from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from '../../firebase';

const LoginForm = ({history}) => {
    let[state,setState]=useState({
        email:'',
        password:'',
        loading:false
    })
    let{email,password,loading}=state
    let handleChange =e=>{
        let{name,value}=e.target
        setState({...state,[name]:value})
    }
    let handleSubmit= async e=>{
        e.preventDefault()
        try {
            setState({loading:true})
            let userData=await firebase.auth().signInWithEmailAndPassword(email,password)
            if(userData.user.emailVerified===true){
                toast.success(`successfully ${email}  loggedd in`)
            history.push("/")
            }else{
                history.push("/login")
                toast.error(`email has not yet verified go to ${email} verify then login`)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
       setState({loading :false})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="loginform-group"><label htmlFor="email" >Email address or username</label>
                  <input type="email" name="email" id="email" placeholder="Email address or username"
                  value={email} onChange={handleChange}
                  />
                
                </div>

                <div className="form-group"><label htmlFor="password" >Password</label>
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={handleChange}/>
                </div>
              
              <span className="spanBlock">
                  <input type="checkbox" name="checkbox" id="checkbox" />Remember me

                  <button>{loading===true?"loading....":"LOGIN"}</button>


              </span>
           

           <div className="abc"><h3>Don't have an account?</h3>
</div>
          <div> <Link to="/signUp"><button>SIGN UP FOR SPOTIFY</button></Link></div>
           
           
           
            </form>



        </div>
    )
}

export default withRouter(LoginForm) 
