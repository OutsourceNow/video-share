import React from 'react';
import { useState, useEffect } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios';
import {Link} from 'react-router-dom'



const EmployeeCharts = () => {
    let months = [];
    const [chartData, setChartData] = useState({})

    //Settings months 
    months = Array.from({ length: 12 }, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString("en", { month: "short" })
    })

    console.log(months)


    const chart = () => {
        let month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        axios.get(`http://localhost:4000/employee/employees`)
            .then(res => {
                console.log(res);
                for (const dataObj of res.data) {
                    const i = new Date(dataObj.created_at).getMonth();
                    //empTime.push(new Date(dataObj.created_at));
                    switch (i) {
                        case 0:
                            month[0]++;
                            break;
                        case 1:
                            month[1]++;
                            break;
                        case 2:
                            month[2]++;
                            break;
                        case 3:
                            month[3]++;
                            break;
                        case 4:
                            month[4]++;
                            break;
                        case 5:
                            month[4]++;
                            break;
                        case 6:
                            month[6]++;
                            break;
                        case 7:
                            month[7]++;
                            break;
                        case 8:
                            month[8]++;
                            break;
                        case 9:
                            month[9]++;
                            break;
                        case 10:
                            month[10]++;
                            break;
                        case 11:
                            month[11]++;
                            break;
                        default:
                            console.log('out of range');

                    }
                }
                // console.log(empTime)

                // //Date to month
                // let empMonth = empTime.map(x=>x.getMonth())
                console.log(month)



                // empTime.map(x=>{
                //     return x.getMonth()
                // })
                // empTime.map(month)
                // function month(x){
                //     return x.getMonth()
                // }


                setChartData({

                    labels: months,
                    datasets: [
                        {
                            label: "Number Of Employees Per Month",
                            data: month,
                            backgroundColor: [
                                'rgba(75, 192,192, 0.6)'
                            ],
                            borderWidth: 4
                        },
                    ]
                })
            })
            .catch(err => {
                console.log(err);
            })


        //console.log(moth);

    }


    useEffect(() => {
        chart()
    }, [])


    return (
        <div className="container">
        <h1 className="text-center text-white p-2" style={{ width: "100%", height: "30%" }} >The Show Room</h1>

            <div>
                <Link to="/Home" className="">
                    <button> Home </button>
                </Link>
                <Link to="/List" className="">
                    <button> Employee List </button>
                </Link>
                <Link to="/Employee">
                    <button><i className="fa fa-pencil fa-lg" aria-hidden="true"></i> Add employee</button>
                </Link>
            </div>
        
            <div style={{ height: '500px', width: '900px', backgroundColor: 'white' }}>
                <Line data={chartData} />
            </div>

            {/* <div style={{ height: '500px', width: '900px', backgroundColor: 'white' }}>
                <Doughnut data={chartData} />
            </div> */}

        </div>
    )
}

export default EmployeeCharts