import logo from './logo.svg';
import './App.css';
import Sample from './Components/Sample';
import HomePage from './Components/HomePage';
import props from './Components/Properties';
import Properties from './Components/Properties';
import ClassComp from './Components/ClassComp';
import FuncEvent from './Components/FuncEvent';
import CondrenComp from './Components/CondrenComp';
import Condrend2 from './Components/Condrend2';
import ReactCss from './Components/ReactCss';
import modules from './Components/Modules';
import Modules from './Components/Modules';
import Reactfragments from './Components/Reactfragments';
import ParentComp from './Components/ParentComp';
import MyHocComp from './Components/MyHocComp';


function App() {
  const person = {
    name:"selva",
    age:22,
    company:"cp"
  }

 

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Sample></Sample>
    // <HomePage></HomePage>
    // <Properties name="selva" age="22" details={person}></Properties>
    // <ClassComp role="program analyst"></ClassComp>
    // <FuncEvent name="selva" age="22" role="developer"></FuncEvent>
      //  <CondrenComp></CondrenComp>
      //  <Condrend2></Condrend2>
    //  <ReactCss></ReactCss>
        // <Modules></Modules>
        // <Reactfragments></Reactfragments>
        // <ParentComp gender="Male" contact="7812805662"></ParentComp>
        <MyHocComp></MyHocComp>
  )
}

 export default App;

