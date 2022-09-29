import styled from "styled-components";
export const Body = styled.div`
  height: 100vh;
  width: 100%;
  background: #ff676d;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    max-width: 400px;
    width: 100%;
  }
  .search-box {
    position: relative;
    height: 50px;
    max-width: 50px;
    /* background: red; */
    margin: auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    transition: all 0.3s ease;
  }
  .search-box input {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background: #fff;
    outline: none;
    border: none;
    padding-left: 20px;
    font-size: 18px;
  }
  #check:checked ~ .search-box {
    max-width: 380px;
  }
  .search-box .icon {
    position: absolute;
    right: -2px;
    top: 0;
    width: 50px;
    background: #fff;
    height: 100%;
    text-align: center;
    line-height: 50px;
    color: #ff676d;
    font-size: 20px;
    border-radius: 25px;
  }
  #check:checked ~ .search-box .icon {
    background: #ff676d;
    color: #fff;
    border-radius: 0 25px 25px 0;
    width: 60px;
  }
  #check {
    display: none;
  }
`;
