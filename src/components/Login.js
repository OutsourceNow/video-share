import React, { useCallback, useContext } from 'react';
import {withRouter, Redirect} from "react-router"
import app from "../firebase"
import {AuthContext} from "../Auth"
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../placeholder.svg";
import {Link} from 'react-router-dom';
import './style.css'

const Login = ({history}) => {
    const handleLogin =useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/Home");
            }catch (error){
                alert(error);
            }
        },
        [history]
    );

    const {currentUser} = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to ="/Home" />
    }


        return(
        <div className="base-container" >
            <div className="contentback">
                <div className="content">

                         <img src={loginImg} alt="" className="imageLogo"/>
                    
                        <img src={welcomeImg} alt="" className="imageWelcome"/>
                    
                    <form className="form" onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" placeholder="example@gmail.com"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" required placeholder="password"/>
                            </div>
                            
                            <div className="footer">
                                    <button type="submit"  className="btnLogin">login</button>
                                
                                <Link to="/Reset" className="btnRegisterLink">
                                    <button type="button" className="btnForgotPassword">Forgot Password</button>
                                </Link>
                            </div>

                    </form>

                    <Link to="/Register" className="btnRegisterLink">
                        <button type="button" className="btnRegister">Register</button>
                    </Link>

                </div>


                <img src={placeImg} alt="" className="imagePlaceholder"/>

            </div>
            
        </div>
        );
};

export default withRouter(Login);
