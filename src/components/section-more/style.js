import styled from "styled-components";

export const SectionMoreWarpper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  .more {
    color: ${props => props.color};
    font-size: 17px;
    font-weight: 600;
    margin-right: 5px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`