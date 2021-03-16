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

                     
                     <img src={loginImg} alt="" className="imageLogoReset"/>
                    
                    <img src={welcomeImg} alt="" className="imageWelcome"/>
                    
                    
                    <form className="form" onSubmit={handleResetPassword} >
                            <label htmlFor="email">Email:</label>
                            <input type="email" required placeholder="example@gmail.com"/>

                            <button type="submit"  className="btnResetPassword">Reset Password</button>
                    </form>

                    <Link to="/">
                        <button type="button" className="btnReturnToLogin">Return to login</button>
                </Link>

                <img src={noteImg} alt="" className="imageNote"/>

                <img src={placeImg} alt="" className="imagePlaceholder"/>
                
                </div>



            </div>
  
        </div>
        );
    }
 export default withRouter(Reset);