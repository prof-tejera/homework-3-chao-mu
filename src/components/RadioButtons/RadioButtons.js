import "./RadioButtons.css";

import Button from "../Button/Button";

const RadioButtons = ({ value, setValue, options }) => {
  return (
    <div className="radio-buttons">
      {options.map(([label, optValue]) => (
        <Button
          active={optValue === value}
          key={label}
          onClick={() => setValue(optValue)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default RadioButtons;
