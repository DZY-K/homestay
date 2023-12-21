import styled from "styled-components";

export const FooterWarpper = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  border-top: 2px solid #eee;

  .footer {
    width: 800px;
    margin-top: 40px;
    box-sizing: border-box;
    .list {
      display: flex;
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
      .item {
        margin-right: 110px;
        .name {
          font-size: 14px;
          color: #000;
          font-weight: 600;
          margin-bottom: 10px;
        }
        .items {
          color: #666;
          font-size: 13px;
          margin-bottom: 5px;
        }
      }
    }
    .text {
      font-size: 13px;
      color: #666;
      margin-top: 20px;
      text-align: center;
    }
  }

`