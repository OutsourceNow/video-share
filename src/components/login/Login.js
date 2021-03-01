import React from 'react';
import loginImg from "../../showroom.svg";
import welcomeImg from "../../welcome.svg";
import placeImg from "../../placeholder.svg";


export class Login extends React.Component {

    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="contentback">
                <div className="content">

                     <div className="imageLogo">
                         <img src={loginImg} alt="" />
                    </div>
                    
                    <div className="imageWelcome">
                        <img src={welcomeImg} alt="" />
                    </div>
                    
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="text" name="password" placeholder="password"/>
                        </div>


                    </div>

                </div>
                
                <div className="footer">
                    <button type="button" className="btnLogin">login</button>

                    <button type="button" className="btnResetPassword">Reset Password</button>
                </div>

                <button type="button" className="btnRegister">Register</button>
                
                <div className="imagePlaceholder">
                    <img src={placeImg} alt=""/>
                </div>

            </div>
            
        </div>
        );
    }
}