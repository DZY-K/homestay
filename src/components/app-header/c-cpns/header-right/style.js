import styled from "styled-components";

export const HeaderRightWarpper = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
${props => props.theme.fontSize.size}
font-weight: 550;
.item {
  cursor: pointer;
  margin-left: 5px;
}
.login, .register, .area {
  width: 40px;
  height: 42px;
  text-align: center;
  line-height: 42px;
  color: ${props => props.theme.isTran ? "#fff" : "var(--font-color)"};
  padding: 0 3px;
  &:hover {
  border-radius: 22px;
  background-color: #F0F0F0;
  color: #000;
}
}
.area {
  display: flex;
  justify-content: center;
  align-items: center;
}
.personal {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 8px 8px 8px 16px;
  border: 1px solid var(--border-color);
  border-radius: 30px;
 
  color: ${props => props.theme.isTran ? "#fff" : "var(--font-color)"};
  ${props => props.theme.mixin.boxShadow}
  .option {
    position: absolute;
    top: 56px;
    right: 3px;
    width: 240px;
    padding: 8px 0;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.1);
    z-index: 99;
    background-color: #fff;
    .main .items, .other .items {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      &:hover {
        background-color: ${props => props.theme.color.bgColor};
      }
    }
    .main {
        padding-bottom: 8px;
      }
    .other {
        padding-top: 8px;
        border-top: 1px solid #eee;
      }
    
  }
}
`