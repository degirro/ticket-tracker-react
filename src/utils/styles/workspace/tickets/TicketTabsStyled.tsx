import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-bottom: 20px;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 5px;
  color: ${(props) => props.theme.textLight};
  cursor: pointer;
  position: relative;

  &.active {
    color: ${(props) => props.theme.text};
    font-weight: bold;

    &::after {
      transition: all ease-in-out 0.3s;
      position: absolute;
      content: "";
      width: 100%;
      height: 4px;
      background: green;
      bottom: 0;
      left: 0;
    }
  }

  &::after {
    transition: all ease-in-out 0.3s;
    position: absolute;
    content: "";
    width: 0px;
    height: 4px;
    background: green;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    transition: all ease-in-out 0.3s;
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background: green;
    bottom: 0;
    left: 0;
  }
`;
