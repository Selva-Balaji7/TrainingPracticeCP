 import logo from './logo.svg';
import './App.css';
import FuncComp from './component/FuncComp';
import SelvaComp from './task/SelvaComp';
import ClassComp from './component/ClassComp';
import EventComp from './component/EventComp';
import MyStateComp from './component/MyStateComp';
import ConditionalRenComp from './component/ConditionRenComp';
import CssComp from './component/CssComp';
import ParentComp from './component/ParentComp';
import ClickCounterComp from './component/ClickCounterComp';
import MyImageComp from './component/MyImageComp';
import UserComp from './component/UserComp';
import UserComp1 from './component/UserComp1';
import ErrorBoundaryComp from './component/ErrorBoundaryComp';
import Arrays from './ES6/Arrays';
import Destructing from './ES6/destructing';
import SpreadComp from './component/spreadopt';
import UseStateHooksComp from './Hooks/UseStateHooks';
import MyHocComp from './component/MyHocCom';
import VirtualDom from './component/VirtualDom';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> 
         <img src={logo} className="App-logo" alt="logo" /> 
          <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
      {/* <VirtualDom></VirtualDom> */}
      {/* <UseStateHooksComp></UseStateHooksComp> */}
      {/* <Arrays list={[1,2,3,4,5]}></Arrays> */}
      {/* <Destructing></Destructing> */}
      {/* <SpreadComp></SpreadComp> */}
      {/* <MyStateComp></MyStateComp>  */}
      {/* /* {<h1>welcome to all </h1>} */}
       {/* <FuncComp fname="selva Balaji" department="IT" role="Fullstack Developer"></FuncComp>  */} 
      {/* <ClassComp fname="selva balaji" role="program analyst" company="Changepond"></ClassComp> */}
       {/* <ConditionalRenComp></ConditionalRenComp>  */}
      {/* <SelvaComp fname="Tharun Balaji" salary={10000000} post="fullstack-Developer" gender="Male" address="chennai"></SelvaComp> 
      <EventComp></EventComp>
       <CssComp></CssComp> */} 
        {/* <ParentComp gender="Male" contact="9289383821"></ParentComp>  */}
       {/* <ClickCounterComp></ClickCounterComp>  */}
       {/* <MyImageComp></MyImageComp> */}
       {/* <UserComp user="selva balaji"></UserComp> */}
         {/* <ErrorBoundaryComp>
           <UserComp user="Selva"></UserComp>
        </ErrorBoundaryComp>  */}
       {/* <ErrorBoundaryComp>
           <UserComp1 user="Rupesh"></UserComp1>
       </ErrorBoundaryComp>
       <ErrorBoundaryComp>
           <UserComp1 user="Arun"></UserComp1>
       </ErrorBoundaryComp>
       <ErrorBoundaryComp>
           <UserComp1 user="Rahul"></UserComp1>
       </ErrorBoundaryComp>
       <UserComp1></UserComp1> */}
        
    </div>
  );
}

export default App;
