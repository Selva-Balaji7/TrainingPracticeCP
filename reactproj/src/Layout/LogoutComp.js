import 
import axios from "axios";
import "./loginComp.css"
import {useNavigate} from "react-router-dom"

const LogoutComp = () => {
   const nav=useNavigate();
   

   const Logout()=>{
  
    const confirmLogout=window.confirm("are yo sure want to logout?");
    if(confirmLogout)
    {
        axios.get("http://localhost:8080/user").then((res) => {
            let currentUser= res.data.filter((val,index)=>{return val.userid===uid && val.userpass===upass})
            if(currentUser.length>0){
                window.alert("logout successfully");
                sessionStorage.removeItem("user",uid);
                nav("/");
            }
    }
   }


    return (
        <div>
             <button type='button' onClick={()=>Logout()} className='btn btn-danger me-2' id="log"><LogoutIcon></LogoutIcon></button>
        </div>
    )
}

export default LogoutComp
