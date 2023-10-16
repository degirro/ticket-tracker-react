import styled from "styled-components";

export const DevsFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const EditDevsFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  gap: 5px;
`;

export const DevsSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100%;
  position: relative;
  border-radius: 5px;
  background: ${(props) => props.theme.body};
`;

export const EditDevsSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 5px;
  background: ${(props) => props.theme.body};
`;

export const FieldSearch = styled.input`
  position: sticky;
  top: 0;
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
  box-sizing: border-box;
  padding: 5px;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.button};
  }
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 5px 0px;
  gap: 5px;
`;

export const UserCheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.borderLight};
  transition: background 0.2s ease-in-out;

  &.active {
    background: ${(props) => props.theme.button};
    transition: background 0.2s ease-in-out;
  }
`;

export const EditUserCheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.borderLight};
  transition: background 0.2s ease-in-out;

  &.active {
    background: ${(props) => props.theme.button};
    transition: background 0.2s ease-in-out;
  }
`;

export const UserInput = styled.input`
  background-color: ${(props) => props.theme.body};
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  visibility: hidden;
`;

export const UserInputLabel = styled.label`
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;
