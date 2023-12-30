import styled from "styled-components";

export const SectionTabsWarpper = styled.div`
position: relative;
  .cityName {
    flex-shrink: 0;
    flex-basis: 120px;
    line-height: 40px;
    text-align: center;
    margin-right: 12px;
    border: 1px solid #E2E2E2;
    font-size: 14px;
    /* &:hover { */
      /* background-color: ${props => props.theme.color.secondaryColor}; */
      /* color: #fff; */
    /* } */
    cursor: pointer;
    user-select:none;
    ${props => props.theme.mixin.boxShadow}
  }
  .active {
  background-color: ${props => props.theme.color.secondaryColor};
  color: #fff;
  }
`