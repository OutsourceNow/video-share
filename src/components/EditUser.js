//import { render } from '@testing-library/react';
import { React, useCallback, useState,useEffect } from 'react';
import { Form } from 'react-bootstrap';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import { getAllByTestId } from '@testing-library/react';




//Sets Employees
const EditUser = () => {
    console.log({})
    const {_id} = useParams();
    console.log(_id)
    const history = useHistory();
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: ""
    });


//Finding the right index and applying change upon adding
    const [index2, setIndex] = useState(-1);

        useEffect(() => {
            console.log('yyyyy',_id)
            axios.get(`http://localhost:4000/employee/employee/${_id}`)
                .then(res => {
                    const info = res.data;
                    setEmployee(info)
                })
        }, []);


//Detecting Error Upon Change
    const onFirstNameChange = (event) => {
        event.persist();
        setEmployee((employee) => ({
            ...employee,
            firstName: event.target.value
        }))
        console.log(employee)
    }

    const onLastNameChange = (event) => {
        event.persist();
        setEmployee((employee) => ({
            ...employee,
            lastName: event.target.value
        }));
    };


    const onAgeChange = (event) => {
        event.persist();
        setEmployee((employee) => ({
            ...employee,
            age: event.target.value
        }));
    };

    const onEmailChange = (event) => {
        event.persist();
        setEmployee((employee) => ({
            ...employee,
            email: event.target.value
        }))
    }




    // // Delete Function
    // function deleteEmployee(msg, index) {
    //     console.log(msg);
    //     let tempEmployees = [...employees];
    //     axios.delete('http://localhost:4000/employee/' + msg)
    //         .then(res => {
    //             console.log(res)
    //             tempEmployees.splice(index, 1);

    //             // e.push(employee)
    //             setEmployees(tempEmployees);
    //         });
    // }

    //Edit
    // function updateEmployee(data, index) {
    //     console.log(data)
    //     setIndex(index);
    //     setEmployee(data)
    // }

    //Handles Data from the form to Mongoose 
    let e = [];
    console.log(e);
    const handleSubmit = useCallback(
        async event => {
            let tempEmployees = [...employees];
            event.preventDefault();
                        axios.put(`http://localhost:4000/employee`, employee)
                            .then(res => {
                                console.log(res)
                                tempEmployees[index2] = employee;
                                setEmployees(tempEmployees)
                                history.push("/List")

                            })
                }
    )


    //Data from the form being displayed plus edit and delete
    // const renderRows = (employee, index) => {
    //     return (
    //         <tr key={index}>
    //             <td>{employee.firstName}</td>
    //             <td>{employee.lastName}</td>
    //             <td>{employee.age}</td>
    //             <td>{employee.email}</td>
    //             <td>
    //                 <button onClick={() => updateEmployee(employee, index)} style={{marginRight:"5px"}}><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></button>
    //                 <button onClick={() => deleteEmployee(employee._id, index)}><i class="fa fa-trash fa-lg" aria-hidden="true"></i></button>
    //             </td>
    //         </tr>
    //     )
    // }


    return (
        <div className="container">
            <h1 className="text-center text-white p-2" style={{ width: "100%", height: "30%" }} >The Show Room</h1>

            <div className="row">

                <Link to="/Home" className="">
                <button>Home</button>
                </Link>

                <Form href="/List" style={{ width: "50%", height: "auto", marginLeft: "10%", marginBottom: "50%" }} className="col bg-white rounded" onSubmit={handleSubmit} autoComplete="off">
                    <h1 className="text-center">-Welcome-</h1>
                    <Form.Control type="hidden" name="_id" value={employee._id} />
                    <Form.Label htmlFor="firstName" className="form">Name:</Form.Label>
                    <Form.Control type="text" name="firstName" required placeholder="First_Name" className="" value={employee.firstName} style={{ width: "80%" }} onChange={onFirstNameChange} />

                    <Form.Label htmlFor="lastName" className="form">Last Name:</Form.Label>
                    <Form.Control type="text" name="lastName" required placeholder="Last_Name" className="" value={employee.lastName} style={{ width: "80%" }} onChange={onLastNameChange}/>

                    <Form.Label htmlFor="age" className="form">Age:</Form.Label>
                    <Form.Control type="number" name="age" required placeholder="age" className="" value={employee.age} style={{ width: "80%" }} onChange={onAgeChange}/>

                    <Form.Label htmlFor="email" className="form">Email:</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="example@111.com" className="" value={employee.email} style={{ width: "80%" }} onChange={onEmailChange}/>


                    <button type="submit" className="btn btn-info" style={{margin:"5px 0px 5px 0px"}} ><i class="fa fa-database"></i> Submit</button>
                    <Link to="/List">
                    <button className="btn btn-info" style={{marginLeft:"5px"}}>View List</button>
                    </Link>

                </Form>

            </div>


        </div>
    )

}
export default EditUser