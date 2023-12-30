import styled from "styled-components";

export const BackTopWarpper = styled.div`
  position: fixed;
  top: 60%;
  right: 0;
  width: 45px;
  height: 80px;
  /* background-color: red; */
  border-radius: 3px;
  border: 2px solid #eee;
  cursor: pointer;
  z-index: 9999;
  transition: all 1.5s ease;
  &:hover {
    background-color: #eee;
  }
  .active {
    display: none;
  }
  .text {
    width: 41px;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
    color: #18191c;
  }
  .top {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #eee;
  }
`