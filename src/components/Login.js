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

   
        <h1 className="text-center bg-white" style={{width:"100%", height:"30%"}} >The Show Room</h1>
        
            <div className="row">


                    <Form style={{width:"60%",height:"auto",marginLeft:"10%",marginBottom:"5%",marginRight:"5%"}} className="col bg-white" onSubmit={handleLogin}>

                        <h1 className="text-center">-Welcome-</h1>

                        <Form.Group className="form-group">
                            <Form.Label htmlFor="email" >Email:</Form.Label>
                            <Form.Control type="email" name="email" required placeholder="example@gmail.com" style={{width:"70%"}}/>
                        </Form.Group>

                        <Form.Group className="form-group">
                            <Form.Label htmlFor="password" >Password:</Form.Label>
                            <Form.Control type="password" name="password" required placeholder="password" style={{width:"70%"}} />
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
                            <Button type="button" className="bg-transparent text-black">Don't have an account? Register</Button>
                        </Link>
                        <br/>
                        <br/>
                    </Form>

                    <div className="col" style={{width:"70%",marginLeft:"5%",marginRight:"5%",marginBottom:"5%"}}>
                        <img src={placeImg} alt="" className="rounded" />
                    </div>
            </div>

        </div>
        );
};


export default withRouter(Login);
