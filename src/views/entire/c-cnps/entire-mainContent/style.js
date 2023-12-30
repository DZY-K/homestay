import styled from "styled-components";

export const EntireContentWarpper = styled.div`
position: relative;
  margin: 30px 20px;
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin-bottom: 10px;
  }       
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .bgCover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgb(225, 225, 225, 0.8);
  }
`