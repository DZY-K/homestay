import styled from "styled-components";
export const HeaderCenterWarpper = styled.div`
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
  .searchText {
    flex: 1;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 600;
    box-sizing: border-box;
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
`