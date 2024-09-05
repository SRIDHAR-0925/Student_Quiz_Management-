import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function ViewEmp(){
    //api call
    //localhost:8080/employee/fetchEmployee=>get method
    //download axios using following command
    //npm i axio s
    const[empdet,setEmpdet]=useState([])
    axios.get('http://localhost:8080/employee/fetchEmployee')
    .then(res=>{
        setEmpdet(res.data);
    }).catch(error=>{
        console.error(error);
    });
    function delemp(id){
        axios.delete("http://localhost:8080/employee/delete/"+id).then((res)=>{},(error)=>{console.log(error)})
    }
    return(<div>
        <Link to="/addemp">AddEmployee</Link>
        <h1>ViewEmployee</h1>
        <table>
            <tr>
                <th>Empname</th>
                <th>Empsal</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {
                empdet.map(
                    emp=>
                        <tr key={empdet.empid}>
                            <td>{emp.empname}</td>
                       <td>{emp.empsal}</td>
                       <td><button>Edit</button></td>
                       <td><button onClick={(e)=>delemp(emp.empid)}> delete</button></td>
                        </tr>
                  

                )
            }
              
        </table>
        </div>);
}


export default ViewEmp;