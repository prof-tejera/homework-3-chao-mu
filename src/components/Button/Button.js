import "./Button.css";

const Button = ({ active, text, children, ...btnProps }) => {
  return (
    <button
      className={
        active ? "Default-button Default-button-active" : "Default-button"
      }
      {...btnProps}
    >
      {text || children}
    </button>
  );
};

export default Button;
