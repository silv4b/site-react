import styled from "styled-components";

const CenterElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WraperFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 420px;

  @media screen and (max-width: 490px) {
    width: 280px;
    margin: 0 !important;
  }
`;

export { CenterElements, WraperFlex };
