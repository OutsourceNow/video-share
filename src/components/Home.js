import React from 'react'
import app from '../firebase'
import placeholderHome from "../placeholderHome.svg"
import {Button} from 'react-bootstrap'

const Home = () => {

    return (
        <div className="container">
               <h1 className="text-center text-white p-2" style={{width:"100%", height:"30%"}} >The Show Room</h1>
            <div>


            <img src={placeholderHome} alt="" className="mx-auto d-block p-5"/>

            <h3 className="text-center text-white  ">
                This is simply a site under development,
                stressful sometimes, but fun to learn.
                Because a line of code per day, makes it 
                work for me. Kudos!
            </h3>

            <Button className="mx-auto d-block" onClick={() => app.auth().signOut()}>signOut</Button>
            </div>


        </div>
    )
}
export default Home