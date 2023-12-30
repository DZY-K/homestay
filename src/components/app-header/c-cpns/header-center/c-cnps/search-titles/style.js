import styled from "styled-components";

export const SearchTitleWarpper = styled.div`
.titles {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    margin: 0 15px;
    height: 30px;
    line-height: 30px;
    color:${props => props.theme.isTran ? "#fff" : " #5B5B5B"};
    font-size: 15px;
    font-weight: 550;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid ${props => props.theme.isTran ? "#fff" : " #000"};
  }
}
`