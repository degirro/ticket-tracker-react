import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const SelectInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  position: relative;
`;

export const InputLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.textLight};
  font-size: 14px;
`;

export const InputError = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
  font-weight: 400;
`;

export const InputField = styled.input`
  background: none;
  color: white;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #8f8f8f;
  padding: 5px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #00b800;
  }
`;

export const InputFieldModal = styled.input`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: 16px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const InputRowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const InputSelectField = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: none;
  padding: 5px 0px;
  background: ${(props) => props.theme.body};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: 5px;
  border-radius: 5px;
`;

export const EditInputSelectField = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: none;
  padding: 5px 0px;
  background: ${(props) => props.theme.body};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: 5px;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;

  &.active {
    background: none;
  }
`;

export const CurrentSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
`;

export const CurrentSelect = styled.input`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  background: none;
  border: none;
  width: 100%;
  margin: 0;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const EditCurrentSelect = styled(motion.input)`
  font-size: 16px;
  color: ${(props) => props.theme.text};
  background: none;
  border: none;
  width: 100%;
  margin: 0;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const SelectContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.body};
  width: 100%;
  gap: 5px;
  overflow: hidden;
  top: 100%;
  z-index: 60;
  box-shadow: 0px 10px 15px 3px rgb(0, 0, 0, 0.3);
  border-radius: 0px 0px 5px 5px;
`;

export const EditSelectContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.body};
  width: 100%;
  gap: 5px;
  overflow: hidden;
  top: 100%;
  z-index: 60;
  border-radius: 0px 0px 5px 5px;
`;

export const SelectOption = styled(motion.div)`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 5px 0px;

  &.current {
    background: #1d1d1d;
  }

  &:hover {
    background: #00b800;
  }
`;

export const InputSelectIconDown = styled(FaChevronDown)`
  position: absolute;
  right: 10px;
  color: ${(props) => props.theme.text};
`;

export const InputSelectIconUp = styled(FaChevronUp)`
  position: absolute;
  right: 10px;
  color: ${(props) => props.theme.text};
`;
