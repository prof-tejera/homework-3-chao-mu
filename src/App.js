import MediaButtons from "MediaButtons/MediaButtons";
import LoginForm from "LoginForm/LoginForm";
import Pager from "Pager/Pager";
import RadioButtons from "components/RadioButtons/RadioButtons";
import "./App.css";
import "./pager-colors.css";

import { useState } from "react";

const fruits = ["Apple", "Pear", "Orange"];

const colors = [
  "blue",
  "blush",
  "bronze",
  "cerise",
  "gold",
  "junglegreen",
  "salmon",
];

const defaultColor = colors[0];

const App = () => {
  const [fruit, setFruit] = useState(fruits[0]);
  const [colorIdx, setColorIdx] = useState(0);

  return (
    <div>
      <div className="App-component">
        <header className="App-header">
          Media Buttons Component (Example)
        </header>
        <div className="App-content">
          <MediaButtons />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">Login form component</header>
        <div className="App-content">
          <LoginForm />
        </div>
      </div>

      <div className="App-component">
        <header className={`App-header pager-color-${colors[colorIdx]}`}>
          Pager component
        </header>
        <div className="App-content">
          <Pager
            totalPages={colors.length}
            setPage={setColorIdx}
            page={colorIdx}
          />
        </div>
      </div>

      <div className="App-component">
        <header className="App-header">
          Radio Buttons component ({fruit})
        </header>
        <div className="App-content">
          <RadioButtons
            value={fruit}
            setValue={setFruit}
            options={fruits.map((label) => [label, label])}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
