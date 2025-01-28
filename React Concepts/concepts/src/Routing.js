import {createBrowserRouter} from "react-router-dom";
import UseEffectHookComp from "./Hooks/UseEffectHooks";
import ClassCounterOneComp from "./ClassComp/ClassCounterOne";
import UseNavigateComp from "./Hooks/UseNavigate";
import UserComp from "./Hooks/useParamsHook";




 const routing = createBrowserRouter([
    
 {path:"",element:<UseEffectHookComp></UseEffectHookComp>},
 {path:"counterone",element:<ClassCounterOneComp></ClassCounterOneComp>},
 {path:"usenav",element:<UseNavigateComp></UseNavigateComp>},
 {path:"user/:id",element:<UserComp></UserComp>}
 ]);

export default routing;