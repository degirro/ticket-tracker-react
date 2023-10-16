import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const FormFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const FormSubmit = styled.button`
  background: none;
  width: 100%;
  padding: 12px 40px;
  border-radius: 10px;
  color: white;
  border: 2px solid #00b800;
  position: relative;
  z-index: 0;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
  font-family: Inter;
  font-size: 14px;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: #00b800;
    top: 100%;
    left: 100%;
    z-index: -1;
    border-radius: 0px;
  }

  &:hover {
    &::after {
      top: 0;
      left: 0;
      transition: all ease-in-out 0.2s;
    }
  }
`;

export const EnumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
`;

export const UserTimeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
`;
