import logo from './logo.svg';
import './App.css';
import FuncComp from './component/FuncComp';
import SelvaComp from './task/SelvaComp';
import ClassComp from './component/ClassComp';
import EventComp from './component/EventComp';
import MyStateComp from './component/MyStateComp';
import ConditionalRenComp from './component/ConditionRenComp';
import CssComp from './component/CssComp';


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
      <h1>welcome to all </h1>
      <FuncComp fname="selva Balaji" post="Fullstack Developer"></FuncComp> 
      <SelvaComp fname="Tharun Balaji" salary={10000000} post="fullstack-Developer" gender="Male" address="chennai"></SelvaComp> 
      <ClassComp fname="panchashil" post="Trainer"></ClassComp>
      <EventComp></EventComp>
      <MyStateComp></MyStateComp>
      <ConditionalRenComp></ConditionalRenComp>
       <CssComp></CssComp>
      
       
    </div>
  );
}

export default App;
