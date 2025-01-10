import { createBrowserRouter } from "react-router-dom";
import ReservationDashComp from "./CRUD/ReservationDashComp";
import AddReservationComp from "./CRUD/AddReservationComp";
import EditReservationComp from "./CRUD/EditReservationComp";
import MainDashBoard from "./Layout/MainDashBoard";


const routing = createBrowserRouter([

    {
        // path: "dashboard", element: <MainDashBoard />, children: [
        path: "", element: <MainDashBoard/>, children: [

            // default Routing
            { path: "", element: <ReservationDashComp /> },
            { path: "addreservation", element: <AddReservationComp /> },
            { path: "editreservation/:id", element: <EditReservationComp /> },
        ]        
    }

])

export default routing;