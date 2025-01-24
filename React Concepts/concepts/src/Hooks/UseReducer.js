import { useReducer,useEffect } from "react";

const inititalState={
    isRunning:false,
    time:0
}
function Stopwatch(){
    const [state,dispatch]=useReducer(reducer,inititalState)
    useEffect(()=>{
        let timer=0
        if(!state.isRunning)
        {
         return;
        }
        timer=setInterval(()=>dispatch({type:"tick"}),1000)
        //cleanup Interval

        return()=>{
            clearInterval(timer);
            timer=0;
        };
        },[state.isRunning])

     return(
        <div className="stopwatch">
        timer: {state.time}<br/>
        <button className="btn btn-success" onClick={()=>dispatch({type:"start"})}>start</button>
        <button className="btn btn-danger" onClick={()=>dispatch({type:"stop"})}>stop</button>
        <button className="btn btn-primary" onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
     )

     function reducer(state,action){
        switch(action.type)
        {
          case "start":return{...state, isRunning:true};
          case "stop":return{...state, isRunning:false};
          case "reset":return{...state, isRunning:false, time:          };
          case "tick":return{...state, time:state.time+1}
          default:throw new Error();
        }

     }
    
}
export default Stopwatch
