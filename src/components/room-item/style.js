import styled from "styled-components";

export const RoomItemWarpper = styled.div`
  flex-shrink: 0;
  width: ${props => props.itemwidth};
  padding: 8px;
  box-sizing: border-box;
  .inner {
    width: 100%;
    .cover {
      position: relative;
      padding: 66.66% 8px 0;
      overflow: hidden;
      box-sizing: border-box;
      border-radius: 3px;
      img {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       object-fit: cover;
      }
    }
    .messages {
      font-size: 10px;
      color: ${props => props.fontscolor};
      margin: 10px 0;
    }
    .name {
      height: 30px;
      font-size: 13px;
      font-weight: 550;
      color: #000;
      overflow:hidden;
      text-overflow:ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price_format {
      margin: 10px 0;
      font-size: 13px;
    }
    .bottom_info {
      display: flex;
      align-items: center;
      color: #767676;
      font-size: 10px;
      .text {
        margin: 0 2px;
      }
    }
  }
`