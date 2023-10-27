import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  gap: 80px;
  width: 90%;
  padding-bottom: 25px;

  @media (max-width: 590px) {
    gap: 15px;
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
