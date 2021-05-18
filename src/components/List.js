import {React,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';



export default function List() {
    
    const [employees, setEmployees] = useState([]);

// Delete Function
        function deleteEmployee(msg, index) {
            console.log(msg);
            let tempEmployees = [...employees];
            axios.delete('http://localhost:4000/employee/' + msg)
                .then(res => {
                    console.log(res)
                    tempEmployees.splice(index, 1);
                    setEmployees(tempEmployees);
                });
        }

        useEffect(() => {
            axios.get(`http://localhost:4000/employee/employees`)
                .then(res => {
                    console.log(res)
                    const info = res.data;
                    setEmployees(info)
                })
        }, []);
      

    const renderRows = (employee, index) => {
        return (
            <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>
                    <Link to={`/EditUser/${employee._id}`}>
                    <button ><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></button>
                    </Link>
                    <button onClick={() => deleteEmployee(employee._id, index)}><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button>
                </td>
            </tr>
        )
    }


    return (
        <div className="container">
            
            <h1 className="text-center text-white p-2" style={{ width: "100%", height: "30%" }} >The Show Room</h1>

                <table style={{ width: "100%", height: "100%", marginLeft: "10%", marginBottom: "50%" }} className="table bg-white table-striped rounded">
                    <thead>
                        <tr>
                            <th scope="col">First_Name</th>
                            <th scope="col">Last_Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th>
                            <Link to="/Employee">
                            <button> <i className="fa fa-pencil fa-lg" aria-hidden="true"></i> Add employee</button>
                            </Link>
                            </th>
                            <th>
                            <Link to="EmployeeCharts">
                            <button>Charts</button>
                            </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(renderRows)}
                    </tbody>

                </table>
        </div>
    )
}
