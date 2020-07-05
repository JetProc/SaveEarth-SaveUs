import React from "react";
import styled from "styled-components";

const Others = () => {
  return (
    <Container>
      <Upper>
        <Space href="https://www.greenpeace.org/korea/" target="_blank">
          <Logo src="../../resources/Greenpeace.png"></Logo>
        </Space>
        <Space
          href="http://kfem.or.kr/?gclid=Cj0KCQjw6PD3BRDPARIsAN8pHuG7ipx6aBANvQ2ehILerU5QY3Amrr9xBYuOyAdDp48OvJOU4SMRcXMaAvvrEALw_wcB"
          target="_blank"
        >
          <Logo src="../../resources/EnvironWork.png"></Logo>
        </Space>
        <Space href="https://www.keco.or.kr/kr/main/index.do" target="_blank">
          <Logo src="../../resources/KoreanBall.png"></Logo>
        </Space>
      </Upper>
      <Lower>
        <Space href="https://www.epa.or.kr/main.jsp#slide2" target="_blank">
          <Logo src="../../resources/SaveInviron.png"></Logo>
        </Space>
        <Space href="http://www.greenkorea.org/" target="_blank">
          <Logo src="../../resources/GreenTeam.png"></Logo>
        </Space>
        <Space href="http://me.go.kr/home/web/main.do" target="_blank">
          <Logo src="../../resources/EnvironFather.png"></Logo>
        </Space>
      </Lower>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 520px;
  margin: 30px 0px 10px 0px;
`;

const Space = styled.a`
  cursor: url("/resources/ccc.cur"), auto;
  position: relative;
  width: 490px;
  height: 250px;
  line-height: 110px;
  align-self: center;
  font-size: 30px;

  border-radius: 20px;
  background: #d0d8e2;
  box-shadow: 4px 4px 10px #53565a, -4px -4px 10px #ffffff, inset 0px 0px 0px #53565a, inset 0px 0px 0px #ffffff;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    cursor: url("/resources/ccc.cur"), auto;
    box-shadow: 0px 0px 0px #53565a, 0px 0px 0px #ffffff, inset 4px 4px 10px #53565a, inset -4px -4px 10px #ffffff;
  }
`;
const Upper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;
const Lower = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 440px;
  height: 200px;
`;
export default Others;
