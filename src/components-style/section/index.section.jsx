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

// Section de Infos do Total no mes
export const SectionMovementInformationAmount = styled.section`
  min-width: 290px;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
`;

// Section Infos de movimentação

export const SectionMovementInformation = styled.section`
  width: 45%;
  min-width: 290px;
  padding: 15px;
`;

// card de infos

export const CardsInfosAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 35px;
  border-radius: 12px;
  box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

export const DivIcons = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  background-color: #00d500;
  display: flex;
  justify-content: center;
  align-items: center;

  .bi {
    font-size: 35px;
    height: 25px;
    display: contents;
    color: #fff;
  }
`;

export const DivIconsVariant = styled(DivIcons)`
  background-color: #ff0000;
`;

export const CardDivInfos = styled.div`
  h5 {
    color: #838383;
  }

  h6 {
    font-weight: 800;
  }
`;

export const CardFilter = styled.section`
  .bi-funnel-fill {
    padding-right: 5px;
  }
`;
