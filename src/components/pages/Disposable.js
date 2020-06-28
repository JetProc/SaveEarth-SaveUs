import React, { Component } from "react";
import styled, { css } from "styled-components";

class Disposable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: "일회용컵",
      item2: "플라스틱 빨대",
      item3: "일회용 접시",
      item4: "비닐 봉투",
      sum: 1,
      url: "/resources/Earth_N.png",
    };
  }

  changeItem1 = () => {
    var summ = this.state.sum;
    if (this.state.item1 === "일회용컵") {
      this.setState({
        item1: "텀블러 | 머그잔 | 유리컵",
        sum: summ + 1,
      });
    } else {
      this.setState({
        item1: "일회용컵",
        sum: summ - 1,
      });
    }

    if (summ >= 4) {
      this.setState({
        url: "/resources/Earth_P.png",
      });
    } else if (summ <= 2) {
      this.setState({
        url: "/resources/Earth_N.png",
      });
    }
  };
  changeItem2 = () => {
    var summ = this.state.sum;
    if (this.state.item2 === "플라스틱 빨대") {
      this.setState({
        item2: "종이빨대 | 유리 빨대 | 실리콘 빨대 | 스텐 빨대",
        sum: summ + 1,
      });
    } else {
      this.setState({
        item2: "플라스틱 빨대",
        sum: summ - 1,
      });
    }
    if (summ >= 4) {
      this.setState({
        url: "/resources/Earth_P.png",
      });
    } else if (summ <= 2) {
      this.setState({
        url: "/resources/Earth_N.png",
      });
    }
  };
  changeItem3 = () => {
    var summ = this.state.sum;

    if (this.state.item3 === "일회용 접시") {
      this.setState({
        item3: "실리콘 접시, 도자기 그릇",
        sum: summ + 1,
      });
    } else {
      this.setState({
        item3: "일회용 접시",
        sum: summ - 1,
      });
    }
    if (summ >= 4) {
      this.setState({
        url: "/resources/Earth_P.png",
      });
    } else if (summ <= 2) {
      this.setState({
        url: "/resources/Earth_N.png",
      });
    }
  };
  changeItem4 = () => {
    var summ = this.state.sum;

    if (this.state.item4 === "비닐 봉투") {
      this.setState({
        item4: "장바구니 | 에코백 | 지퍼백",
        sum: summ + 1,
      });
    } else {
      this.setState({
        item4: "비닐 봉투",
        sum: summ - 1,
      });
    }
    if (summ >= 4) {
      this.setState({
        url: "/resources/Earth_P.png",
      });
    } else if (summ <= 2) {
      this.setState({
        url: "/resources/Earth_N.png",
      });
    }
  };
  render() {
    return (
      <>
        <Container>
          <ContentsContainer>
            <EarthImage src={this.state.url}></EarthImage>
            <ButtonContainer>
              <Button asdf={this.state.item1} onClick={this.changeItem1}>
                {this.state.item1}
              </Button>
              <Button asdf={this.state.item2} onClick={this.changeItem2}>
                {this.state.item2}
              </Button>
              <Button asdf={this.state.item3} onClick={this.changeItem3}>
                {this.state.item3}
              </Button>
              <Button asdf={this.state.item4} onClick={this.changeItem4}>
                {this.state.item4}
              </Button>
            </ButtonContainer>
          </ContentsContainer>
        </Container>
      </>
    );
  }
}
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 30px 10px;
`;
const EarthImage = styled.img`
  width: ‭477px;
  height: 393px;
  margin: auto 20px auto 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
  width: 900px;
`;

const Button = styled.div`
  background-color: red;
  width: 300px;
  height: 100px;
  margin: 10px auto;
  font-family: "Jua", sans-serif;
  font-size: 40px;
  line-height: 100px;
  text-align: center;

  border-radius: 20px;
  background: #d0d8e2;
  box-shadow: 4px 4px 10px #53565a, -4px -4px 10px #ffffff, inset 0px 0px 0px #53565a, inset 0px 0px 0px #ffffff;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px #53565a, 0px 0px 0px #ffffff, inset 4px 4px 10px #53565a, inset -4px -4px 10px #ffffff;
  }
  ${({ asdf }) =>
    asdf !== "일회용컵" &&
    asdf !== "플라스틱 빨대" &&
    asdf !== "일회용 접시" &&
    asdf !== "비닐 봉투" &&
    css`
      width: 800px;
      box-shadow: 0px 0px 0px #53565a, 0px 0px 0px #ffffff, inset 4px 4px 10px #53565a, inset -4px -4px 10px #ffffff;
    `}
`;
export default Disposable;
