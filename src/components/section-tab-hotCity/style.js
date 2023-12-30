import styled from "styled-components";

export const HotCityTabWarpper = styled.div`
 flex-shrink: 0;
 /* flex-basis: 177px; */
 width: 20%;
.cityTab {
  position: relative;
  /* height: 250px; */
  /* width: 200px; */
  margin: 8px;
}
.bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(to Top, #000000cf, rgba(0, 0, 0, 0.1));
  /* background: rgba(0, 0, 0, 0.2); */
}
img {
  width: 100%;
  height: 100%;
}
.info {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  color: #fff;
  font-size: 12px;
  z-index: 9999;
  .city {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 3px;
  }
}
`