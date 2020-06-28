import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <Upper>
        <But to="/Ocean">
          <Icon src="../../resources/OceanIcon.png" />
        </But>
        <But to="/Electricity">
          <Icon src="../../resources/ElectricityIcon.png"></Icon>
        </But>
        <But to="/Trash">
          <Icon src="../../resources/TrashIcon.png"></Icon>
        </But>
      </Upper>
      <Lower>
        <But to="/Disposable">
          <Icon src="../../resources/DisposableIcon.png"></Icon>
        </But>
        <But>
          <Icon src="../../resources/SolutionIcon.png"></Icon>
        </But>
        <But>
          <Icon src="../../resources/OthersIcon.png"></Icon>
        </But>
      </Lower>
    </Container>
  );
};

const Icon = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 190px;
  height: 190px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 520px;
  margin: 20px 0px 20px 0px;
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  margin-top: 30px;
`;
const Lower = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  margin-bottom: 30px;
`;
const But = styled(Link)`
  position: relative;
  width: 380px;
  height: 220px;
  line-height: 110px;
  align-self: center;
  font-size: 30px;

  border-radius: 20px;
  background: #d0d8e2;
  box-shadow: 4px 4px 10px #53565a, -4px -4px 10px #ffffff, inset 0px 0px 0px #53565a, inset 0px 0px 0px #ffffff;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px #53565a, 0px 0px 0px #ffffff, inset 4px 4px 10px #53565a, inset -4px -4px 10px #ffffff;
  }
`;
export default Main;
