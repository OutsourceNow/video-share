import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useCallback } from 'react';
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../Image.svg";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import app from "../firebase";
// import './style.css';


const Register =({history}) => {
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/Home");
        } catch(error){
            alert(error);
        }
    },[history]);



   

        return(
        <div className="bg-black">

            <div className="imageLogo">
            <img src={loginImg} alt="" className="loginImg"/>
            </div>
            
                <div className="content">

                <div className="imagePlaceholder">
                    <img src={placeImg} alt="" className="placeImg" />
                </div>
                    
                    <form className="" onSubmit={handleSignUp}>

                    <img src={welcomeImg} alt="" className=""/>
                        

                            <label htmlFor="email" className="">Email:</label>
                            <input type="email" name="email" required placeholder="example@gmail.com" className=""/>

                            <label htmlFor="password" className="labelBox">Password</label>
                            <input type="password" name="password" required="" placeholder="password" className="inputBox"/>


                        <div className="footer" >
                                <button type="submit"  className="">SignUp</button>
                            <Link to="/" className="btnLink">
                                <button type="button"  className="">Already a User?Login</button>
                            </Link>
                        </div>

                    </form>

                </div>
         
        </div>
        )
}

export default withRouter(Register);