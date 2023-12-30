import styled from "styled-components";

export const ScrollViewWarpper = styled.div`
  position: relative;
  margin: 10px 0;
  .boxhd {
    overflow: hidden;
  }
 .scroll-contrent {
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.7s ease;
  transform: translateX(${props => props.offsetlength}px);
 }
 button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border: 1px solid rgb(0 0 0/0.3);
  border-radius: 28px;
  z-index: 9;
  /* box-shadow: 2px 0 7px 4px rgba(0,0,0,0.1) ; */
  ${props => props.theme.mixin.boxShadow}
 }
 .boxbgliner {
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  z-index: 99;
  /* background-color: red; */
  /* background-image: linear-gradient(to left,rgb(255 255 255/0),white 40px); */
 }
 .right {
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
 }
`