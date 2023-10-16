import styled from "styled-components";
import Codebg from "../../../../assets/imgs/codebg.jpg";

export const AccountSection = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: radial-gradient(rgb(17, 17, 17), rgb(5, 5, 5));
  z-index: 2;

  &::after {
    background: url(${Codebg});
    opacity: 0.03;
    background-size: cover;
    height: 100%;
    width: 100%;
    content: "";
    position: absolute;
    z-index: 3;
  }
`;

export const AccountContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  background: #1d1d1d;
  border-radius: 10px;
  padding: 40px 25px;
  gap: 20px;
  z-index: 5;
`;

export const AccountHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
`;

export const AccountHeader = styled.p`
  margin: 0;
  font-size: 35px;
  color: white;
  font-weight: bold;
`;

export const AccountInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const AccountInputLabel = styled.label`
  color: #f1f1f1;
  font-size: 14px;
`;

export const AccountInputField = styled.input`
  background: #141414;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 7px 12px;

  &:focus {
    outline: none;
  }
`;

export const AccountFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
`;

export const AccountSubmit = styled.button`
  background: none;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  color: white;
  border: 2px solid #00b800;
  position: relative;
  z-index: 0;
  overflow: hidden;
  cursor: pointer;
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
    border-radius: 5px;
  }

  &:hover {
    &::after {
      top: 0;
      left: 0;
      transition: all ease-in-out 0.2s;
    }
  }
`;

export const AccountRedirect = styled.p`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: white;
  font-weight: 300;
  gap: 10px;
`;
