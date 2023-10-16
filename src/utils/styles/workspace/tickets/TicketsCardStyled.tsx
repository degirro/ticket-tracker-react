import { motion } from "framer-motion";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardOverlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.overlay};
  z-index: 500;
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.cardBg};
  backdrop-filter: blur(10px);
  padding: 30px;
  width: 100%;
  border-radius: 10px;
  gap: 20px;
  z-index: 1;
  position: relative;
  z-index: 501;
  width: 1100px;
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 2vw;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeaderTitle = styled(motion.p)`
  font-size: 25px;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

export const CardHeaderRight = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  align-items: center;
`;

export const CardHeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardId = styled(motion.p)`
  font-size: 16px;
  color: ${(props) => props.theme.subtitle};
`;

export const CardTitle = styled(motion.h3)`
  font-size: 25px;
  color: ${(props) => props.theme.text};
`;

export const CardDescContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

export const CardDescTitle = styled(motion.p)`
  color: ${(props) => props.theme.subtitle};
  font-size: 16px;
`;

export const CardDesc = styled(motion.p)`
  color: ${(props) => props.theme.subtitle};
  font-size: 20px;
`;

export const CardFooterLeft = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;

export const CardPriority = styled(motion.p)`
  font-size: 16px;
  padding: 4px 10px;
  border-radius: 50px;
  font-weight: bold;

  &.low {
    background: #656fa9;
    color: #020e44;
  }
  &.medium {
    background: #c8b653;
    color: #414103;
  }
  &.high {
    background: #a96565;
    color: #4e0505;
  }
`;

export const CardIssue = styled(motion.p)`
  color: ${(props) => props.theme.subtitle};
  border: 1px solid ${(props) => props.theme.borderLight};
  font-size: 16px;
  padding: 4px 10px;
  border-radius: 50px;
`;

export const CardEditButton = styled.p`
  color: ${(props) => props.theme.button};
  font-size: 16px;
  cursor: pointer;
`;

export const CardCloseButton = styled(IoClose)`
  font-size: 25px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

export const EditDropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const EditCardSection = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const EditCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const EditFormSubmit = styled.button`
  background: none;
  border-radius: 10px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-family: Inter;
  font-size: 14px;
  border: none;
`;

export const EditFormFooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 10px;
  gap: 20px;
`;
