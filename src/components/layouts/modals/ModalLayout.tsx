import { AnimatePresence } from "framer-motion";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalClose,
} from "../../../utils/styles/modals/ModalStyled";
import {
  overlayVariants,
  modalVariants,
} from "../../../utils/variants/variants";

type props = {
  children: React.ReactNode;
  modalTitle: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const ModalLayout: React.FC<props> = ({
  setShow,
  show,
  modalTitle,
  children,
}) => {
  return (
    <AnimatePresence>
      <ModalOverlay
        transition={{ ease: "easeInOut", duration: 0.3 }}
        variants={overlayVariants}
        animate={show ? "open" : "closed"}
      >
        <ModalContainer
          variants={modalVariants}
          animate={show ? "open" : "closed"}
        >
          <ModalHeader>
            <ModalTitle>{modalTitle}</ModalTitle>
            <ModalClose onClick={() => setShow(false)} />
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalOverlay>
    </AnimatePresence>
  );
};
