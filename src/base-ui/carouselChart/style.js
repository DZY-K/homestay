import styled from "styled-components";

export const CarouselChartWarpper = styled.div`
.swiper {
      position: relative;
      color: #fff;
      cursor: pointer;
      user-select: none;
      &:hover {
        .btn {
          display: flex;
        }
      }
      /* 指示器 */
  .list {
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translate(-50%);
    width: 100px;
    .btnItem {
      width: 20%;
      flex-shrink: 0;
      /* margin-right: 10px; */
      display: flex;
      justify-content: center;
    }
    
    .item {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #fff;
    }
    .active {
      width: 8px;
      height: 8px;
      background-color: red;
    }
    .smallSize {
      width: 6px;
      height: 6px;
    }
    .miniSize {
      width: 5px;
      height: 5px;
    }
    .Cmini {
      width: 3px;
      height: 3px;
    }
  }

}
    .btn {
      width: 50px;
      height: 100%;
      display: none;
      align-items: center;
      z-index: 9;
      justify-content: center;
      background-color: rgb(0, 0, 0, 0.2);
    }
    .leftMove {
      position: absolute;
      left: 0;
      top: 0;
    }
    .rightMove {
      position: absolute;
      right: 0;
      top: 0;
    }
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
`