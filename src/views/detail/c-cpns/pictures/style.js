import styled from "styled-components";

export const PicturesWarpper = styled.div`
position: relative;
width: 100%;
/* margin-top: 81px; */
> .pictures {
    width: 100%;
    height: 450px;
    display: flex;
    /* background-color: #000; */
    &:hover{
      .cover{
      opacity: 1 !important;
    }
    .items:hover {
        .cover {
          opacity: 0 !important;
        }
      }
  }
    .leftP {
      /* position: relative; */
      width: 50%;
      height: 100%;
      .items {
        width: 100%;
        height: 100%;
        position: relative;
        cursor: pointer;
      
        img {
          position: absolute;
          left: 0;
          top: 0; 
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        .cover {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(0, 0, 0, 0.6);
        /* z-index: 1; */
        transition: opacity 200ms ease;
        opacity: 0;
      }
      }
    }
    .rightP {
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      border: 1px solid #000;
      .items {
        position: relative;
        width: 50%;
        cursor: pointer;
        img {
          position: absolute;
          left: 0;
          top: 0; 
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        .cover {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(0, 0, 0, 0.6);
        /* z-index: 1; */
        transition: opacity 200ms ease;
        opacity: 0;
      }
      }
    }
    
    .leftP .items, .rightP .items {
      /* filter: blur(5px); */
      /* position: absolute; */
      /* z-index: 99; */
      overflow: hidden;
      
        
        &:hover {
          img {
          transform: scale(1.3);
          /* opacity: 0.7; 当前图片透明度降低 */
          /* filter: grayscale(100%); 当前图片变灰 */
        }
        /* &:hover ~ .pictures img {
            /* display: block !important; */
            /* opacity: 0.5; 其他图片透明度降低 */
            /* filter: grayscale(70%); 其他图片变灰 */
          /* } */ 
      }
    }
  }
`