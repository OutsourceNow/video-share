import React from 'react'
import app from '../firebase'
import loginImg from "../showroom.svg";
import placeholderHome from "../placeholderHome.svg"
import welcomeImg from "../welcome.svg";
import {Link} from "react-router-dom"

const Home = () => {

    return (
        <div className="container">


            
                <Link to="/Home" >
                    <img src={loginImg} alt="" className="loginImgHome"/>
                </Link>
             
            <img src={welcomeImg} alt="" className="imageWelcomeHome"/>

            <img src={placeholderHome} alt="" className="placeholderHome"/>

            <h3 className="note">
                This is simply a site under development,
                stressful sometimes, but fun to learn.
                Because a line of code per day, makes it 
                work for me. Kudos!
            </h3>

            <button className="signOut" onClick={() => app.auth().signOut()}>signOut</button>


        </div>
    )
}
export default Home