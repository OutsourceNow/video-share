import {Form, Button} from 'react-bootstrap'
import React, { useCallback, useContext } from 'react';
import {withRouter, Redirect} from "react-router"
import app from "../firebase"
import {AuthContext} from "../Auth"
import {Link} from 'react-router-dom';
import placeImg from "../Image.svg";

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
            
        <div className=""> 


        <h1 className="text-center">The Show Room</h1>

            <div className="row">

                    <div className="col" style={{width:"60%", marginLeft:"20%"}}>
                        <img src={placeImg} alt="" className="rounded" />
                    </div>


                    <Form style={{width:"80%", marginLeft:"10%", marginRight:"20%"}} className="col" onSubmit={handleLogin}>

                        <h1 className="text-white">-Welcome-</h1>

                        <Form.Group className="form-group">
                            <Form.Label for="email" >Email:</Form.Label>
                            <Form.Control type="email" Name="email" required placeholder="example@gmail.com"/>
                        </Form.Group>

                        <Form.Group class="form-group">
                            <Form.Label for="password" >Password:</Form.Label>
                            <Form.Control type="password" Name="password" required placeholder="password" />
                        </Form.Group>
                    
                        <Button type="submit">login</Button>
                        <br/>
                        <br/>
                        <Link to="/Reset" >
                            <Button >Forgot Password</Button>
                        </Link>
                        <br/>
                        <br/>
                        <Link to="/Register">
                            <Button type="button" className="">Don't have an account?Register</Button>
                        </Link>

                    </Form>
                    <br/>
                    <br/>
                </div>

        </div>
        );
};

export default withRouter(Login);
