import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Edit(){
    const location=useLocation();
    const id=location.state;
    const [empdet,SetEmpdet]=useState("");
    axios.get('http://localhost:8080/employee/profile1/'+id).then((res)=>{SetEmpdet(res.data)},(error)=>{console.log(error)})
    return(
        <center> man
    <h1>{empdet.empname}</h1></center>
    )
}
export default Edit;