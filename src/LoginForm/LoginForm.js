import "./LoginForm.css";

import Button from "../components/Button/Button";

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <div className="header-text">
        {"Login".split("").map((c) => (
          <div key={c}>{c}</div>
        ))}
      </div>
      <form className="login-form">
        <div className="username">
          <label htmlFor="username">User name</label>
          <input id="username" type="text" autoComplete="username" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div className="remember-me">
          <input id="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="footer-text">
        <div>Form Component</div>
      </div>
    </div>
  );
};

export default LoginForm;
