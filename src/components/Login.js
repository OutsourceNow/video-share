import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useCallback, useContext } from 'react';
import {withRouter, Redirect} from "react-router"
import app from "../firebase"
import {AuthContext} from "../Auth"
import loginImg from "../showroom.svg";
// import welcomeImg from "../welcome.svg";
import placeImg from "../Image.svg";
import {Link} from 'react-router-dom';
// import './style.css'

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
        <div className="container">


            <img src={loginImg} className="mx-auto d-block" alt="" width="60%"/>

            
            <div className="row">

                    <img src={placeImg} alt="" className="col"/>

                    <form action="/action_page.php" className="form-group col" onSubmit={handleLogin}>

                        <h1 className="text-white">-Welcome-</h1>

                        <div className="form-group">
                            <label for="email" >Email:</label>
                            <input type="email" nameName="email" required placeholder="example@gmail.com" class="from-control" />
                        </div>

                        <div class="form-group">
                            <label for="password" >Password:</label>
                            <input type="password" nameName="password" required placeholder="password" class="from-control" />
                        </div>
                    
                            
                        <button type="submit">login</button>
                            
                        <Link to="/Reset" >
                            <button >Forgot Password</button>
                        </Link>

                        <Link to="/Register">
                            <button type="button" className="">Don't have an account?Register</button>
                        </Link>
                            
                    </form>



                </div>

        </div>
        );
};

export default withRouter(Login);
