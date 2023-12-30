import styled from "styled-components";

export const TestWarpper = styled.div`

margin: 20px 0;
padding-left: 20px;

.list {
  .btn {
    width: 20%;
    flex-shrink: 0;
    /* margin-right: 10px; */
    display: flex;
    justify-content: center;
  }
  
  .item {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: rgb(0, 0, 0, 0.3);
  }
  .active {
    width: 15px;
    height: 15px;
    background-color: #000;
  }
  .smallSize {
    width: 13px;
    height: 13px;
  }
  .miniSize {
    width: 10px;
    height: 10px;
  }
  .Cmini {
    width: 8px;
    height: 8px;
  }
}
`