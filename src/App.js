import { useState } from 'react';
import Alert from './components/Alert';
import Theme from './components/Theme';
import Navbar from "./components/Navbar"
import TextSection from './components/TextSection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#06112e"
      showAlert("Dark Mode enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Dark Mode disabled", "danger")
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className='mb-3' style={{
          height: "50px",
        }}>
          <Alert alert={alert} />
        </div>
        <Routes>
        <Route exact path="/about" element={<Theme />} />
        <Route exact path="/" element={<TextSection mode={mode} showAlert={showAlert} />} />
        </Routes>
        
      </Router>
      {/* <Theme/> */}
    </>
  );
}

export default App;
