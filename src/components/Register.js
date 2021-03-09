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
        const {email, password} = event.target.element;
        try{
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch(error){
            alert(error);
        }
    },[history]);



   

        return(
        <div className="base-container" >

            <div className="contentback">
                <div className="content">

                     <div className="imageLogo">
                         <img src={loginImg} alt=""/>
                    </div>
                    
                    <div className="imageWelcome">
                        <img src={welcomeImg} alt=""/>
                    </div>
                    
                    <form className="form" onSubmit={handleSignUp}>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" required name="email" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <input type="password" required name="password" placeholder="password"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password confirmation</label>
                            <input type="password" name="password" required placeholder="password confirmation"/>
                        </div>

                        <div className="footer">
                            <button type="submit"  className="btnSignUp">SignUp</button>
                            <Link to="/">
                                <button type="button"  className="btnBackToLogin">Already a User</button>
                                </Link>
                        </div>


                    </form>

                </div>


                
                <div className="imagePlaceholder">
                    <img src={placeImg} alt=""/>
                </div>

            </div>
         
        </div>
        )
}

export default withRouter(Register);