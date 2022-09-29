import React from "react";
import { Body } from "./Style";

const Index = () => {
  return (
    <Body>
      <div className="container">
        <div className="title-text">
          <div className="title Login">Login Form</div>
          {/* <div className="title signup">Signup Form</div> */}
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <label for="" className="slide login">
              Login
            </label>
            <label for="" className="slide signup">
              {" "}
              Signup
            </label>
          </div>
          <div className="form-inner">
            <form action="#" className="login">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot passsword?</a>
              </div>
              <div className="field">
                <input type="submit" value="Login" />
              </div>

              <div className="signup-link">
                Not a member? <a href="#">Signup now </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Index;
