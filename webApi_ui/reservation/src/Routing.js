import { createBrowserRouter } from "react-router-dom";
import ReservationComp from "./CRUD/ReservationComp";
import AddResComp from "./CRUD/AddResComp";
import EditResComp from "./CRUD/EditResComp";
import MainReserveComp from "./components/MainReserveComp";

const routing = createBrowserRouter([

    {
        // path: "dashboard", element: <MainDashBoard />, children: [
        path: "", element: <MainReserveComp/>, children: [

            // default Routing
            { path: "", element: <ReservationComp /> },
            { path: "addreservation", element: <AddResComp /> },
            { path: "editreservation/:id", element: <EditResComp /> },
        ]        
    }

])

export default routing;