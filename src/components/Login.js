import React, { useCallback, useContext } from 'react';
import {withRouter, Redirect} from "react-router"
import app from "../firebase"
import {AuthContext} from "../Auth"
import loginImg from "../showroom.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../Image.svg";
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
        <div className="base">

            <div className="imageLogo">
            <img src={loginImg} alt="" className="loginImg"/>
            </div>
            
            <div className="content">

                <div className="imagePlaceholder">
                    <img src={placeImg} alt="" className="placeImg" />
                </div>

                    <form className="formDiv" onSubmit={handleLogin}>

                        <img src={welcomeImg} alt="" className="imageWelcome"/>

                        <label htmlFor="email" className="labelBox">Email:</label>
                        <input type="email" required="" placeholder="example@gmail.com" className="inputBox"/>

                        <label htmlFor="password" className="labelBox">Password:</label>
                        <input type="password" required="" placeholder="password" className="inputBox"/>
                    
                            
                        <div className="footer">
                        <button type="submit"  className="btnLogin">login</button>
                            
                        <Link to="/Reset" className="btnLink">
                            <button className="btnForgotPassword">Forgot Password</button>
                        </Link>
                        </div>

                        <Link to="/Register" className="btnLink">
                            <button type="button" className="btnRegister">Don't have an account?Register</button>
                        </Link>
                            
                    </form>



                </div>

        </div>
        );
};

export default withRouter(Login);
