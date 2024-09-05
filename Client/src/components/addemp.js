import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddEmp(){
    const[empdet,setEmpdet]=useState("");
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const name=event.target.name;
    const value=event.target.value;
    setEmpdet(values=>({...values,[name]:value}));

}
const handleSubmit=(event)=>{
event.preventDefault();
axios.post("http://localhost:8080/employee/addEmployee",{empname:empdet.empname,empsal:empdet.empsal})
.then((res)=>{console.log(res);navigate("/viewemp");},(error)=>{console.log(error)})            
}
return(<div>
    <Link to="/viewemp">ViewEmployees</Link>
    <form onSubmit={handleSubmit}>
        <input type="text" name="empname" onChange={handleChange} value={empdet.empname} placeholder="Enter Empname"></input><br/>
        <input type="number" name="empsal" onChange={handleChange} value={empdet.empsal} placeholder="Enter EmpSalary"></input><br/>
        <input type="Submit"/>
    </form>
</div>)
}

export default AddEmp;