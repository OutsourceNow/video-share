//import { render } from '@testing-library/react';
import { React, useCallback, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';


//Sets Employees
const Employee = () => {
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
        axios.get(`http://localhost:4000/employee/employees`)
            .then(res => {
                console.log(res)
                const info = res.data;
                setEmployees(info)
                console.log(info)
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




    // Delete Function
    function deleteEmployee(msg, index) {
        console.log(msg);
        let tempEmployees = [...employees];
        axios.delete('http://localhost:4000/employee/' + msg)
            .then(res => {
                console.log(res)
                tempEmployees.splice(index, 1);

                // e.push(employee)
                setEmployees(tempEmployees);
            });
    }

    //Edit
    function updateEmployee(data, index) {
        console.log(data)
        //index2 = index;
        setIndex(index);
        setEmployee(data)

        // axios.put('http://localhost:4000/employee/'+msgs, index)
        // .then(res =>{
        //     console.log(res)
        //     employees.push(index, 1);
        // })
    }

    //Handles Data from the form to Mongoose 
    let e = [];
    console.log(e);
    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            let tempEmployees = [...employees];

            try {
                if (!employee._id) {
                    const { firstName, lastName, age, email } = event.target.elements;
                    const employee = {
                        firstName: firstName.value,
                        lastName: lastName.value,
                        age: age.value,
                        email: email.value
                    };

                    console.log(employee);

                    axios.post(`http://localhost:4000/employee/create`, employee)
                        .then(res => {
                            console.log(res)
                            tempEmployees.push(res.data.employee);
                            setEmployees(tempEmployees);
                            })
                    } else {
                        console.log(employee);
                        axios.put(`http://localhost:4000/employee`, employee)
                            .then(res => {
                                console.log(res)
                                tempEmployees[index2] = employee;
                                setEmployees(tempEmployees);
                            })
                }

            } catch (e) { }


        });

    //Data from the form being displayed plus edit and delete
    const renderRows = (employee, index) => {
        return (
            <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>
                    <button onClick={() => updateEmployee(employee, index)}>Update</button>
                    <button onClick={() => deleteEmployee(employee._id, index)}>Delete</button>
                </td>
            </tr>
        )
    }



    return (
        <div className="container">
            <h1 className="text-center text-white p-2" style={{ width: "100%", height: "30%" }} >The Show Room</h1>

            <div className="row">
                <Form style={{ width: "50%", height: "auto", marginLeft: "10%", marginBottom: "50%" }} className="col bg-white rounded" onSubmit={handleSubmit}>
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

                    <Button type="submit" className="">Submit</Button>

                </Form>


                <table style={{ width: "50%", height: "auto", marginLeft: "10%", marginBottom: "50%" }} className="table bg-white">
                    <thead>
                        <tr>
                            <th scope="col">First_Name</th>
                            <th scope="col">Last_Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(renderRows)}
                    </tbody>

                </table>
            </div>
        </div>
    )

}
export default Employee