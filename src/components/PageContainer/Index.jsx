import { MainContainer } from "./Styles";

import { Header } from "..";

export const PageContainer = ({ children }) => {
  return (
    <>
      <Header />

      <MainContainer>{children}</MainContainer>
    </>
  );
};
