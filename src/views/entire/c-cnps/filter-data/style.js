import styled from "styled-components";

export const FilterWarpper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  margin-top: 105px;
  /* border: 1px solid #eee; */
  .listItem {
    flex-shrink: 0;
    padding: 8px 12px;
    margin-right: 10px;
    border: 2px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    user-select:none;
    ${props => props.theme.mixin.boxShadow}
  }
  .active {
    background-color: ${props => props.theme.color.secondaryColor};
    color: #fff;
  }
`