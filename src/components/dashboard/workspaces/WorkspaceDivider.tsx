import {
  DividerContainer,
  DividerTitle,
  DividerSearchIcon,
} from "../../../utils/styles/dashboard/DashboardStyled";
import {
  InputContainer,
  InputField,
} from "../../../utils/styles/global/InputStyled";

type props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const WorkspaceDivider: React.FC<props> = ({ handleSearch }) => {
  return (
    <DividerContainer>
      <DividerTitle>Name</DividerTitle>
      <InputContainer style={{ flexDirection: "row", width: "auto" }}>
        <DividerSearchIcon />
        <InputField onChange={(e) => handleSearch(e)} />
      </InputContainer>
    </DividerContainer>
  );
};
