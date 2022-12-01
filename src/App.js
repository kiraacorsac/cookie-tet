import logo from './logo.svg';
import './App.css';
import Cookies from 'universal-cookie';
import { useState } from "react";


function App() {
  const cookies = new Cookies();

  if (cookies.get("buttonPresses") == undefined) {
    cookies.set("buttonPresses", 0);
  }


  const [buttonPresses, setButtonPresses] = useState(cookies.get("buttonPresses"))


  // cookies.set("buttonPresses", 1);
  console.log("non-existing cookie: ", cookies.get("nonexistingCookie"));

  function onButtonClick() {
    console.log("Button clicked!");
    console.log(cookies.get("buttonPresses"));

    const presses = Number(cookies.get("buttonPresses")) + 1;
    cookies.set("buttonPresses", presses)
    setButtonPresses(presses)

  }

  return (
    <div className="App">
      <button onClick={onButtonClick}>Press me!</button>


      Button presses: {buttonPresses}.
    </div>
  );
}

export default App;
