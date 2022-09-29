import React from "react";
import { Body } from "./Style";

const Test = () => {
  return (
    <Body>
      <div className="container">
        <div classNameName="title">Registration</div>
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="datails">Full Name</span>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <span className="datails">User Name</span>
              <input type="text" placeholder="Enter your user name" />
            </div>
            <div className="input-box">
              <span className="datails">Email</span>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <span className="datails">Phone number</span>
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className="input-box">
              <span className="datails">Password</span>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="input-box">
              <span className="datails">Confirm Password</span>
              <input type="password" placeholder="Confirm you password" />
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />

            <span className="gender-title">Gender</span>
            <div className="category">
              <label for="dot-1">
                <span className="dot one"></span>
                <span className="gender"> Male</span>
              </label>
              <label for="dot-2">
                <span className="dot one"></span>
                <span className="gender"> Female</span>
              </label>
              <label for="dot-3">
                <span className="dot one"></span>
                <span className="gender"> Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </Body>
  );
};

export default Test;
