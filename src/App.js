
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  const [Mode,setMode]=useState("light")
  const [Alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode=()=>{
    if(Mode==="light"){

      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("dark mode has been enabled","success")
      document.title="TextUtils-Dark mode"
      // setInterval(() => {
      //   document.title="TextUtils is amazing mode"
        
      // }, 2000);
      //  setInterval(() => {
      //   document.title="install TextUtils now"
        
      // }, 1500);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled","success")
      document.title="TextUtils-light mode"
    }
  }
  return (
    <>
    {/* <Router> */}
   <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode}/>
   <Alerts alert={Alert}/>
   <div className="container my-3">
   {/* <Routes> */}
   {/* <Route path="/" element={} /> */}
   <TextForm showAlert={showAlert} heading="Enter the text to analyze below" Mode={Mode}/>
        {/* <Route path="/about" element={<About/>}/ > 👈 Renders at /app/ */}
   
      {/* </Routes> */}
   </div>
   {/* </Router> */}
    </>
  );
}

export default App;
