import { BarLoader } from "react-spinners";
import {
  AppLoadingContainer,
  AppLoading,
} from "../../utils/styles/loading/LoadingStyled";

export const LoadingPage = () => {
  const override = {
    borderRadius: "50px",
  };

  return (
    <AppLoadingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <AppLoading>Loading</AppLoading>
      <BarLoader
        cssOverride={override}
        width="200px"
        height="6px"
        color="#00b800"
      />
    </AppLoadingContainer>
  );
};
