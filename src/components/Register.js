import React, { useCallback } from 'react';
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../Image.svg";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import app from "../firebase";
import './style.css';


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
        <div className="base">

            <div className="imageLogo">
            <img src={loginImg} alt="" className="loginImg"/>
            </div>
            
                <div className="content">

                <div className="imagePlaceholder">
                    <img src={placeImg} alt="" className="placeImg" />
                </div>
                    
                    <form className="form" onSubmit={handleSignUp}>

                    <img src={welcomeImg} alt="" className="imageWelcome"/>
                        

                            <label htmlFor="email" className="label">Email:</label>
                            <input type="email" required placeholder="example@gmail.com" className="input"/>

                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" required placeholder="password" className="input"/>


                        <div className="footer" >
                                <button type="submit"  className="btnSignUp">SignUp</button>
                            <Link to="/" className="btnLink">
                                <button type="button"  className="btnReturnLogin">Already a User?Login</button>
                            </Link>
                        </div>

                    </form>

                </div>

                <img src={placeImg} alt="" className="imagePlaceholderRegister"/>


         
        </div>
        )
}

export default withRouter(Register);