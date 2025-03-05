import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 100%;
  height: 100vh;
  max-width: 1326px;
  min-width: 310px;
  /* background-color: #f0f;*/
  padding: 5px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`;

// Section Infos de movimentação

export const SectionMovementInformation = styled.section`
  width: 45%;
  min-width: 290px;
  padding: 15px;
`;

export const CardFilter = styled.section`
  .bi-funnel-fill {
    padding-right: 5px;
  }
`;
