import React, { useCallback } from 'react';
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../placeholder.svg";
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
        <div className="base-container" >

            <div className="contentback">
                <div className="content">


                    <img src={loginImg} alt="" className="imageLogo"/>
                    

                    <img src={welcomeImg} alt="" className="imageWelcome"/>
                    
                    <form className="form" onSubmit={handleSignUp}>
                        
                        <div className="form-group">

                            <label htmlFor="email">Email:</label>
                            <input type="email" required placeholder="example@gmail.com"/>

                            <label htmlFor="password">Password</label>
                            <input type="password" required placeholder="password"/>

                        </div>



                        <div className="footer">
                                <button type="submit"  className="btnSignUp">SignUp</button>
                            <Link to="/">
                                <button type="button"  className="btnBackToLogin">Already a User</button>
                            </Link>
                        </div>


                    </form>

                </div>

                <img src={placeImg} alt="" className="imagePlaceholderRegister"/>

            </div>
         
        </div>
        )
}

export default withRouter(Register);