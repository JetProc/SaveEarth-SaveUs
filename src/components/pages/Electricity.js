import React from "react";
import styled from "styled-components";

class Electricity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "/resources/DefaultMap.png",
      saving: "???",
      phoneUsageDay: "???",
      phoneUsageYear: "???",
      carUsage: "???",
      carMove: "???",
    };
  }
  changeRange1 = () => {
    this.setState({
      url: "/resources/MainCityMap.png",
      light: 1,
      saving: "41,190kwh",
      phoneUsageDay: "2,059,450일",
      phoneUsageYear: "5,720년",
      carUsage: "274,593km",
      carMove: "686번",
    });
  };
  changeRange2 = () => {
    this.setState({
      url: "/resources/AllCityMap.png",
      light: 0,
      saving: "266,471kwh",
      phoneUsageDay: "1,332,355일",
      phoneUsageYear: "37010년",
      carUsage: "17,776,473km",
      carMove: "44,441번",
    });
  };
  changeRange3 = () => {
    this.setState({
      url: "/resources/DefaultMap.png",
      light: 2,
      saving: "???",
      phoneUsageDay: "???",
      phoneUsageYear: "???",
      carUsage: "???",
      carMove: "???",
    });
  };
  render() {
    const url = this.state.url;
    return (
      <>
        <TextContainer>
          <Text onClick={this.changeRange3}>10분 동안</Text>
          <But onClick={this.changeRange1}>국내 주요 도시</But>
          <But onClick={this.changeRange2}>전국</But>
          <Text onClick={this.changeRange3}>의 불을 끈다면</Text>
        </TextContainer>
        <ContentsContainer onClick={this.changeRange3}>
          <Map src={url}></Map>
          <NotMap>
            <Saving>
              {/*세로 내용1*/}약<SavingValue>{this.state.saving}</SavingValue>의 전기 절약
            </Saving>
            <PhoneContainer>
              {/*세로 내용2*/}
              <PhoneImage src={"/resources/smartphone.png"}></PhoneImage>
              <PhoneUsage>
                <Content>
                  <div>약</div>
                  <PhoneValue>{this.state.phoneUsageDay}</PhoneValue> <div>사용 가능</div>
                </Content>
                <Content>
                  <div>= 약</div>
                  <PhoneValue2>{this.state.phoneUsageYear}</PhoneValue2>
                  <div> 사용 가능</div>
                </Content>
              </PhoneUsage>
            </PhoneContainer>
            <PhoneInst>완충 20wh 기준</PhoneInst> {/*세로 내용3*/}
            <CarContainer>
              {/*세로 내용4*/}
              <CarImage src={"/resources/electric car.png"}></CarImage>
              <CarUsage>
                <Content>
                  <div>약</div>
                  <CarValue>{this.state.carUsage}</CarValue>
                  <div>주행 가능</div>
                </Content>
                <Content>
                  <div>= 서울-부산 왕복 약</div>
                  <CarValue2>{this.state.carMove}</CarValue2>
                  <div>가능</div>
                </Content>
              </CarUsage>
            </CarContainer>
          </NotMap>
        </ContentsContainer>
      </>
    );
  }
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
const TextContainer = styled.div`
  font-family: "Jua", sans-serif;
  display: flex;
  flex-direction: row;
  height: 140px;
  margin-left: 50px;
  margin-top: 40px;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Jua", sans-serif;
`;
const Text = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 10px;
  font-size: 80px;
`;
const But = styled.button`
  font-family: "Jua", sans-serif;
  width: 260px;
  height: 100px;
  font-size: 40px;
  border-style: none;
  outline: none;
  margin: 5px 40px 0px 30px;
  border-radius: 20px;
  background: #d0d8e2;
  box-shadow: 4px 4px 10px #53565a, -4px -4px 10px #ffffff, inset 0px 0px 0px #53565a, inset 0px 0px 0px #ffffff;
  transition: all 0.15s linear;
  cursor: pointer;
  &:focus,
  :hover {
    box-shadow: 0px 0px 0px #53565a, 0px 0px 0px #ffffff, inset 4px 4px 10px #53565a, inset -4px -4px 10px #ffffff;
  }
`;
const Map = styled.img`
  margin-top: 100px;
  margin-left: 100px;
  width: 280px;
  height: 480px;
`;
const NotMap = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0 auto;
`;

const Saving = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 100px;
  line-height: 100px;
  font-size: 60px;
  margin: 0 auto;
`;
const SavingValue = styled.div`
  width: 580px;
  height: fit-content;
  margin: 0 auto;
  text-align: center;
  font-size: 100px;
  color: #d63031;
`;
const PhoneContainer = styled.div`
  width: 1000px;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;
const CarContainer = styled.div`
  width: 1000px;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const PhoneImage = styled.img`
  height: 180px;
  margin: 20px;
`;
const CarImage = styled.img`
  height: 180px;
  margin: 20px;
`;

const PhoneUsage = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;
const CarUsage = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const PhoneValue = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  color: #0984e3;
`;
const CarValue = styled.div`
  width: 350px;
  text-align: center;
  color: #0984e3;
`;
const PhoneValue2 = styled.div`
  width: 210px;
  text-align: center;
  color: #0984e3;
`;
const CarValue2 = styled.div`
  width: 230px;
  margin: 0 auto;
  text-align: center;
  color: #0984e3;
`;
const PhoneInst = styled.div`
  margin-left: 60px;
  width: fit-content;
  height: fit-content;
`;
export default Electricity;
