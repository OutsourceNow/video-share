import React, {useCallback} from 'react';
// import noteImg from "../Note.svg";
import placeImg from "../Image.svg";
import {Link} from 'react-router-dom';
import app from '../firebase'
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap'


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
        <div className="" >
            
            <h1 className="text-center text-white p-2" style={{width:"100%", height:"30%"}} >The Show Room</h1>

                <div className="row">
                        
                <Form style={{width:"60%",height:"auto",marginLeft:"10%",marginBottom:"50%",marginRight:"5%"}} className="col bg-white rounded" onSubmit={handleResetPassword}>
                    <h1 className="text-center">-Welcome-</h1>

                            <Form.Label htmlFor="email" className="form">Email:</Form.Label>
                            <Form.Control type="email" name="email" required placeholder="example@gmail.com" className="" style={{width:"80%"}}/>

                            <br/>

                            <Button type="submit" className="">Reset Password</Button>
                            <br/>
                            <br/>
                            <Link to="/" className="">
                                <Button type="button" className="text-body bg-transparent border-0 mx-auto d-block">Already have an account? login</Button>
                            </Link>
                    </Form>

                    <div className="col" style={{width:"60%",marginRight:"5%",marginBottom:"0%"}}>
                        <img src={placeImg} alt="" className="rounded" />
                    </div>

                </div>
  
        </div>
        );
    }
 export default withRouter(Reset);