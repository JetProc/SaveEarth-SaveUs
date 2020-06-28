import React from "react";
import styled from "styled-components";

const Ocean = () => {
  return (
    <Container>
      <OceanLongImg src="/resources/OceanLongImage.png"></OceanLongImg>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const OceanLongImg = styled.img`
  display: block;
  width: 95%;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
`;

export default Ocean;
