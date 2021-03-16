import React, {useCallback} from 'react';
import loginImg from "../showroom.svg";
import noteImg from "../Note.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../placeholder.svg";
import {Link} from 'react-router-dom';
import app from '../firebase'
import {withRouter} from 'react-router-dom'


    const Reset =({history}) => {
        const handleResetPassword = useCallback(async event =>{
            event.preventDefault();
            const {email} = event.target.elements;
            try{
                await app
                .auth()
                .sendPasswordResetEmail(email.value);
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
                         <img src={loginImg} alt="" />
                    </div>
                    
                    <div className="imageWelcome">
                        <img src={welcomeImg} alt="" />
                    </div>
                    
                    <form className="form" onSubmit={handleResetPassword} >
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" required name="email" placeholder="email"/>
                        </div>

                        <div className="footer">
                            <button type="submit"  className="btnResetPassword">Reset Password</button>
                        </div>
                    </form>

                </div>

                <Link to="/">
                        <button type="button" className="btnReurnToLogin">Return to login</button>
                </Link>

                <div className="imageNote">
                    <img src={noteImg} alt="" />
                </div>

                <div className="imagePlaceholder">
                    <img src={placeImg} alt=""/>
                </div>

            </div>
            
        </div>
        );
    }
 export default withRouter(Reset);