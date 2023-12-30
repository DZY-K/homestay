import styled from "styled-components";

export const HeaderWrapper = styled.div`
position: ${props => props.isfix};
  top: 0;
  left: 0;
  right: 0; 
  box-sizing: border-box;
  /* padding: 0 24px; */
  

  z-index: 99;
  .main {
    position: relative;
    z-index: 99;
    background-color: ${props => props.theme.isTran ? "rgb(225,225,225, 0)" : "#fff"};
    padding: 0 24px;
    border: ${props => props.theme.isTran ? "0" : "1px"} solid #eee;

  }
  .contentS {

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  /* z-index: 999; */

  }
  
  .cover {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.5);
  }
`
export const SearchAreaWaarpper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.$show ? "100px" : "0"};
`