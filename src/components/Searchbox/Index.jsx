import React from "react";
import { Body } from "./Style";

const IndexPage = () => {
  return (
    <Body>
      <div className="box">
        <input type="checkbox" id="check" />
        <div className="search-box">
          <input type="text" placeholder="Type here..." />
          <label for="check" className="icon">
            <i className="fas fa-search"></i>
          </label>
        </div>
      </div>
    </Body>
  );
};

export default IndexPage;
