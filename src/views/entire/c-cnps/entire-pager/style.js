import styled from "styled-components";

export const EntirePagerWarpper = styled.div`
  margin: 50px 0 100px 0;
  position: relative;
  .pager {
    display: flex;
    justify-content: center;
    align-items: center;
    :where(.css-dev-only-do-not-override-gzal6t).ant-pagination .ant-pagination-item-active {
      border: 0;
      border-radius: 50%;
      background-color: #000;
      
      a {
        color: #fff;
      }
    }
    :where(.css-dev-only-do-not-override-gzal6t).ant-pagination .ant-pagination-item{
      border-radius: 50%;
    }
    :where(.css-dev-only-do-not-override-gzal6t).ant-pagination .ant-pagination-total-text {
      position: absolute;
      left: 50%;
      bottom: -38px;
      transform: translate(-50%);
      color: #2B436F;
    }
  }
`