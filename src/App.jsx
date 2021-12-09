import React, { Fragment, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Pages/HeaderComponent/Navbar'
import './SpotifyGlobal.css'
import Home from './Pages/Home';
import Login from './Components/AuthComponent/Login';
import PageNotFound from './Pages/PageNotFound';
import SignUp from './Components/AuthComponent/SignUp';
import { AuthContextApi } from './Apis/AuthContext';
import UserHome from './UserComponent/UserHome';



const App = () => {
   let USER=useContext(AuthContextApi)
   
  
   return(
   <section id="SpotifyMainBlock">
    <article>
        <Router>
       <header> {!USER ? <Navbar/>:""}</header>
       <ToastContainer/>
       <main>
       {/* Dynamic routing starts here */}
       <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/login" exact>
            <Login/>
        </Route>
        
         <Route path="/signup" exact>
             <SignUp/>
         </Route>

         <Route path="/userhome">
             <UserHome/>
         </Route>
        
         <Route path="/pagenotfound">
            <PageNotFound/>
        </Route>
       </Switch>
       {/* Dynamic routing ends here */}
       </main>
       </Router>
    </article>
</section>
) 
  }

export default App
