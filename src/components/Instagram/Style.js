import styled from "styled-components";
export const Body = styled.div`
  padding: 100px;
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  .container {
    max-width: 390px;
    width: 350px;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    /* box-shadow: 0px 15px 20px rgba(0,0,0,0.1); */
  }
  .container .title-text {
    display: flex;
    width: 200%;
  }
  .container .title-text .title {
    width: 50%;
    font-size: 35px;

    font-weight: 600;
    text-align: center;
  }
  .container .form-container {
    width: 100%;
  }
  .form-container .slide-controls {
    display: flex;
    height: 50px;
    width: 100%;
    margin: 30px 0 10px 0;
    border: 1px solid lightgrey;
    border-radius: 5px;
    overflow: hidden;
    justify-content: space-between;
  }
  .slide-controls .slide {
    height: 100%;
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .slide-controls .slide-tab {
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  }
  .form-container .form-inner form {
  }
  .form-inner form .field {
    height: 50px;
    width: 100%;
    margin-top: 20px;
  }
  .form-inner form .field input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 15px;
    font-size: 17px;
    border-radius: 5px;
    border: 1px solid lightgrey;
  }
  .form-inner form .pass-link {
    margin-top: 5px;
  }
  .form-inner form .pass-link a,
  .form-inner form .signup-link a {
    color: #fa4299;
    text-decoration: none;
  }
  .form-inner form .pass-link a:hover,
  .form-inner form .signup-link a:hover {
    text-decoration: underline;
  }
  form .field input[type="submit"] {
    color: #fff;
    font-size: 20px;
    font-weight: 500px;
    padding-left: 0px;
    border: none;
    cursor: pointer;
    background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  }
`;
