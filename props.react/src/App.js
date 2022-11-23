import logo from './logo.svg';
import './App.css';
import First from "./FC/First";
import Third from './CC/Third';
import First123 from './CallApplyBind/First123';


function App() {
  return (
    <div className="App">
    {/* <First name={"muthuraj"} /> */}
    {/* <Third name={"Class Compontents"} age={"25"}/> */}
    <First123 name={"Class Compontents"} age={"25"}/>
    </div>
  );
}

export default App;
