// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import About from './components/About';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode Enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode Disabled", "success")

    }
  }
  return (
    <>
      {/* <Router> */}
        {/* we can give props values when we calling a js function like this in react */}
        <Navbar title="Text Utils" about="About me" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* if we donot give props and we set the default props then default props will be take place. 
                         <Navbar/>     */}

        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About mode={mode}/>}></Route> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}></Route> */}
          <TextForm showAlert={showAlert} mode={mode}/>
         {/* </Routes> */}
        </div>
     {/* </Router> */}
    </>
  )
}

export default App;
