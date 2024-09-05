import Navbar1 from "./components/navbar";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import StudyMaterial from "./components/StudyMaterial";
import  Home  from "./components/Home";
import Addemp from "./components/addemp";
import ViewEmp from "./components/viewemp";
import Register from "./components/register";
import Profile from "./components/profile"
import Course from "./components/course";
function App() {


return (
        <div>
        <BrowserRouter>
        <Navbar1/>
             <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/studyMaterial" element={<StudyMaterial />}/>
                <Route path="/addemp" element={<Addemp/>}/>
                <Route path="/viewemp" element={<ViewEmp/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/course" element={<Course/>}></Route>
                <Route path="/about"/>
             </Routes>
        </BrowserRouter>  
                        
        </div>
);
}
export default App;