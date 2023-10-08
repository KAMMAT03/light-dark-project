import {useState} from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  }

  return (
    <div className="container">
      <Nav darkMode={darkMode} toggleDarkMode={toggleMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

