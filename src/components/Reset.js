import React, {useCallback} from 'react';
import loginImg from "../showroom.svg";
// import noteImg from "../Note.svg";
import welcomeImg from "../welcome.svg";
import placeImg from "../Image.svg";
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
        <div className="base" >
            
            <div className="imageLogo">
            <img src={loginImg} alt="" className="loginImg"/>
            </div>

                <div className="content">

                    <div className="imagePlaceholder">
                        <img src={placeImg} alt="" className="placeImg" />
                    </div>
                        
                    <form className="form" onSubmit={handleResetPassword} >

                    <img src={welcomeImg} alt="" className="imageWelcome"/>

                            <label htmlFor="email" className="label">Email:</label>
                            <input type="email" required placeholder="example@gmail.com" className="input"/>

                            <button type="submit"  className="btnResetPassword">Reset Password</button>

                            <Link to="/" className="btnLink">
                                <button type="button" className="btnReturnLogin">Already have an account?Login</button>
                            </Link>
                    </form>



                </div>
  
        </div>
        );
    }
 export default withRouter(Reset);