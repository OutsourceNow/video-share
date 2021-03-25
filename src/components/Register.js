import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap'
import React, { useCallback } from 'react';
import placeImg from "../Image.svg";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";
import app from "../firebase";


const Register =({history}) => {
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/Home");
        } catch(error){
            alert(error);
        }
    },[history]);



   

        return(
        <div className="">

            <h1 className="text-center text-white p-2" style={{width:"100%", height:"30%"}} >The Show Room</h1>

                <div className="row">

                    
                <Form style={{width:"60%",marginLeft:"10%",marginBottom:"5%",marginRight:"5%"}} className="col bg-white rounded" onSubmit={handleSignUp}>
                    <h1 className="text-center">-Welcome-</h1>
                        

                            <Form.Label htmlFor="email" className="">Email:</Form.Label>
                            <Form.Control type="email" name="email" required placeholder="example@gmail.com" className="" style={{width:"80%"}}/>

                            <Form.Label htmlFor="password" className="labelBox">Password</Form.Label>
                            <Form.Control type="password" name="password" required="" placeholder="password" className="inputBox" style={{width:"80%"}}/>
                            <br/>
                                <Button type="submit"  className="">SignUp</Button>
                            <br/>
                            <br/>
                            <Link to="/" className="">
                                <Button type="button" className="text-body bg-transparent border-0">Already a User? Login</Button>
                            </Link>
                    </Form>
                    <div className="col" style={{width:"80%",marginLeft:"5%",marginRight:"5%",marginBottom:"5%"}}>
                        <img src={placeImg} alt="" className="rounded" />
                    </div>
                </div>
        </div>
        )
}

export default withRouter(Register);