import React,{ useState } from "react";
import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import Alert from "./component/Alert";
// import About from "./component/About";

function App() {
  const [mode, setMode] = useState('light');
  // const [greenmode, setGreenMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = ()=>{
    if(mode === 'light')
    {
       setMode('dark')
       document.body.style.backgroundColor = '#042743';
       showAlert("Dark Mode has been enabled","success")
    }
    else
    {
       setMode('light')
       document.body.style.backgroundColor = 'white';
       showAlert("Light Mode has been enabled","success")

    }
  }
  // const toggleGreenMode = ()=>{
  //   if(mode === 'light')
  //     {
  //       setMode('#06f462')
  //       document.body.style.backgroundColor = '#a8e9c1';
  //       showAlert("Green Mode has been enabled","success")
  //     }
  //   else
  //   {
  //       setMode('light')
  //       document.body.style.backgroundColor = 'white';
  //       showAlert("Light Mode has been enabled","success")
  //   }
  // }
  return (
    <>
      <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
          <Textform heading = 'Enter Text To Analyze' mode={mode} showAlert={showAlert}/>
          {/* <About/> */}
      </div>
      {/* <Router>
      <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/textform" element={<Textform heading='Enter Text To Analyze' mode={mode} showAlert={showAlert} />} />
          <Route path="/" element={<Textform heading='Enter Text To Analyze' mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router> */}
        

    </>
  );
}

// function Nav() {
//   return <h2>Home</h2>;
// }

// function Aboutq() {
//   return <h2>About</h2>;
// }

// function Textformq() {
//   return <h2>TextForm</h2>;
// }

export default App;
