import "./loginComp.css"
import { useNavigate } from "react-router-dom"
import NavComp from "./NavComp";

const LogoutComp = () => {
    const nav = useNavigate();
    function Logout(){

        const isconfirmLogout = window.confirm("are yo sure want to logout?");
        if (isconfirmLogout) {
            sessionStorage.clear();
            window.alert("logout successfully");
            nav("/");
        }
    }
return (
    <div>
        <NavComp exit={Logout}></NavComp>
    </div>
)
}


export default LogoutComp
