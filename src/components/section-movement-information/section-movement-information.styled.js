import styled from "styled-components";
// Section Infos de movimentação

export const SectionMovementInformation = styled.section`
  width: 45%;
  min-width: 290px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardFilter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  .bi-funnel-fill {
    padding-right: 5px;
  }
`;

export const SectionTable = styled.section`
  width: 100%;
`;
