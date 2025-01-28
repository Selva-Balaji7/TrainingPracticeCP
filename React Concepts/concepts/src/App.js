import logo from './logo.svg';
import './App.css';
import UseStateHooksComp from './Hooks/UseStateHooks';
import UseEffectHookComp from './Hooks/UseEffectHooks';
import ClassCounterOneComp from './ClassComp/ClassCounterOne';
import UseRefComp from './Hooks/UseRef';
import Component1 from './Hooks/UseContext/Example1propdrilling';
import Example2 from './Hooks/UseContext/Example2';
import Stopwatch from './Hooks/UseReducer';
import UseMemoHook from './Hooks/UseMemoHook';
import Factorial from './Hooks/useCallbackHook';
import SampleClassComp from './ClassComp/SampleClassComp';
import PropsComp from './ClassComp/PropsComp';
import ConditionalComp from './ConditionalRendering/ConditionalComp';
import EventtargetComp from './EventTargetExample/type-1';
import Examp1Comp from './FunComp/Examp1Comp';
import FragmentClassComp from './ClassComp/Fragments';



function App() {
  const Emp={
     name:"Selva Balaji",
     age:22,
     id:4583
  }
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
      </header> */}
      <FragmentClassComp></FragmentClassComp>
      {/* <Examp1Comp name={Emp.name} age={Emp.age} id={Emp.id}></Examp1Comp> */}
      {/* <SampleClassComp/> */}
      {/* <ConditionalComp></ConditionalComp> */}
      {/* <PropsComp name="selvabalaji" company="changepond"></PropsComp> */}
      {/* <UseMemoHook></UseMemoHook> */}
      {/* <Factorial></Factorial>  */}
      {/* <Stopwatch></Stopwatch> */}
      {/* <Example2></Example2> */}
      {/* <Component1></Component1> */}
      {/* <UseRefComp></UseRefComp> */}
      {/* <ClassCounterOneComp></ClassCounterOneComp> */}
      {/* <UseStateHooksComp></UseStateHooksComp> */}
       {/* <UseEffectHookComp></UseEffectHookComp> */}
       {/* <EventtargetComp></EventtargetComp> */}
    </div>
  );
}

export default App;
