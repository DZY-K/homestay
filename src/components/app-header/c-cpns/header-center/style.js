import styled from "styled-components";
export const HeaderCenterWarpper = styled.div`
 position: relative;
  .searchBtn {
  /* position: absolute; */
  /* left: 50%; */
  /* bottom: -25px; */
  /* transform: translateX(-50%); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-color);
  width: 300px;
  height: 48px;
  ${props => props.theme.borderRadius.radius}
  ${props => props.theme.mixin.boxShadow}
  box-sizing: border-box;
  padding-left: 8px;
  }
  .searchText {
    flex: 1;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 600;
    box-sizing: border-box;
    color: ${props => props.theme.isTran ? "#fff" : "#000"};
  }
  .searchIcon {
    width: 32px;
    height: 32px;
    border-radius: 32px;
    box-sizing: border-box;
    background-color: ${props => props.theme.color.primaryColor};
    display:flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 7px 7px 7px 0;
  }
  .searchContent {
    position: relative;
    .info {
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-50%);
    }
    .top {
      width: 200px;
    }
    .bottom {
      position: relative;
    }
  
}
.detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .login-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .login-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .login-exit {
    transform: scale(1.0) translateY(0);
    opacity: 0;
  }
  /* .login-enter-active {
    transition: all 250ms ease;
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 1;
  } */
`