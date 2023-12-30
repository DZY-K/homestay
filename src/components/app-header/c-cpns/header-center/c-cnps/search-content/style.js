import styled from "styled-components";

export const SearchContentWarpper = styled.div`
.SData {
  position: absolute;
  top: 26px;
  left: 50%;
  /* right: 0; */
  transform: translate(-50%);
  display: flex;
  align-items: center;
  border: 2px solid #E2E2E2;
  border-radius: 50px;
  padding: 10px 0;
  background-color: #fff;
  /* width: 500px; */
  .item {
    width: 230px;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
    border-right: 2px solid #E2E2E2;
    padding: 0 25px;
    &:last-child {
    border-right: 0;
  }
    /* line-height: 50px; */
    .itemTitle {
      font-size: 12px;
      font-weight: 550;
      color: #000;
      margin-bottom: 5px;
    }
    .itemDessc {
      color: #707070;
    }
  }
  
}
`