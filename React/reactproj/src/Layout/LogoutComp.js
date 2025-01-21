import react from "react";
import { useNavigate } from "react-router-dom"
import NavComp from "./NavComp";

const LogoutComp = () => {
    const nav = useNavigate();
    function Logout(){

        const isconfirmLogout = window.confirm("are yo sure want to logout?");
        if (isconfirmLogout) {
            sessionStorage.clear();
            window.alert("logout successfully");
            console.log("redirecting to /");
            nav("/");
        }
    }
return (
    <div>
      {Logout()}
    </div>
)
}


export default LogoutComp
