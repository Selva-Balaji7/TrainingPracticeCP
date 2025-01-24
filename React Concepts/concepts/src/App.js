import logo from './logo.svg';
import './App.css';
import UseStateHooksComp from './Hooks/UseStateHooks';
import EventtargetComp from './EventTarget/type-1';
import UseEffectHookComp from './Hooks/UseEffectHooks';
import ClassCounterOneComp from './ClassComp/ClassCounterOne';
import UseRefComp from './Hooks/UseRef';
import Component1 from './Hooks/UseContext/Example1propdrilling';
import Example2 from './Hooks/UseContext/Example2';
import Stopwatch from './Hooks/UseReducer';



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
      </header> */}
      <Stopwatch></Stopwatch>
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
