import styled from "styled-components";

export const PictureBrowserWpr = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: #000;
display: flex;
  flex-direction: column;
.top {
  position: relative;
    height: 86px;
  .hidden {
    position: absolute;
      top: 15px;
      right: 25px;
     
  
  color: #fff;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 19px;
  font-size: 49px;
  cursor: pointer;
  /* box-sizing: border-box; */
  /* padding-bottom: 5px; */
}

}
.picture {
  
  position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
  .big {
    position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
    .left, .right {
      display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
    }
  }
    .mPicture {
      
      
      position: relative;
      /* padding: 66.66% 8px 0; */
      width: 100%;
      height: 100%;
      /* width: 600px; */
      max-width: 105vh;
      overflow: hidden;
      /* box-sizing: border-box; */
      border-radius: 3px;
      img {
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       margin: 0 auto;
       height: 100%;
       width: 100%;
       user-select: none;
      }
      .pic-enter {
        transform: translateX(${props => (props.shows ? "100%" : "-100%")});
        opacity: 0;
      }
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 2s ease;
      }
      .pic-exit {
       
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 2s ease;
      }
     
    }
    
 
}
.preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    width: 100%;
    margin-bottom: 30px;
    .info {
      /* position: absolute; */
      /* bottom: 10px; */
      /* left: 50%; */
      width: 790px;
        /* transform: translateX(-50%); */
      height: 100%;
      /* max-width: 105vh; */
      color: #fff;
      /* width: 600px; */
      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {

        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props => props.showlist ? "67px" : "0"};
        .item {
          margin-right: 15px;
          cursor: pointer;
          flex-grow: 120px;
          flex-shrink: 0;
          width: 13.45%;
          img {
            width: 100%;
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }

`