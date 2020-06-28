import React from "react";
import styled, { css } from "styled-components";

function Description(props) {
  var name = "",
    kind = "",
    leftyear = props.leftyear;
  if (leftyear < 1) {
  } else if (leftyear < 5) {
    name = "종이는";
    kind = "2~5개월";
  } else if (leftyear < 20) {
    name = "우유팩은";
    kind = "5년";
  } else if (leftyear < 100) {
    name = "나무젓가락, 일회용컵은";
    kind = "20년";
  } else if (leftyear < 500) {
    name = "금속캔은";
    kind = "100년";
  } else if (leftyear >= 500) {
    name = "알루미늄캔, 플라스틱병, 스티로폼은";
    kind = "500년";
  }
  if (leftyear < 0) {
    return (
      <Pr>
        <DesciptionText>환경은 과거로 되돌릴 수 없어요ㅠㅠ</DesciptionText>
      </Pr>
    );
  } else if (leftyear === 0) {
    return (
      <Pr>
        <DesciptionText>미래를 입력해주세요!</DesciptionText>
      </Pr>
    );
  } else if (leftyear <= 1000) {
    return (
      <Pr>
        <DesciptionText>
          <ColorBlue>{name}</ColorBlue>
          <ColorRed>{kind}</ColorRed> 후에야 다 썩어요ㅠㅠ
        </DesciptionText>
      </Pr>
    );
  } else {
    return (
      <Pr>
        <DesciptionText>환경을 보호합시다!</DesciptionText>
      </Pr>
    );
  }
}

function Opacity(props) {
  var leftyear = props.leftyear,
    d = 0;
  var num = props.num;
  var src = props.sc;
  var kind = props.kind;
  if (leftyear < 1) d = 0;
  else if (leftyear < 5) d = 1;
  else if (leftyear < 20) d = 2;
  else if (leftyear < 100) d = 3;
  else if (leftyear < 500) d = 4;
  else if (leftyear >= 500) d = 5;

  if (d === 0) {
    return (
      <OpacityConatiner>
        <Image src={src}></Image>
        <Txt>{kind}</Txt>
        <Txt>{num}</Txt>
      </OpacityConatiner>
    );
  } else if (d === 1) {
    if (num === "2~5개월") {
      return (
        <div>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </div>
      );
    } else {
      return (
        <OpacityConatiner>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </OpacityConatiner>
      );
    }
  } else if (d === 2) {
    if (num === "2~5개월" || num === "5년") {
      return (
        <div>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </div>
      );
    } else {
      return (
        <OpacityConatiner>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </OpacityConatiner>
      );
    }
  } else if (d === 3) {
    if (num === "2~5개월" || num === "5년" || num === "20년") {
      return (
        <div>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </div>
      );
    } else {
      return (
        <OpacityConatiner>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </OpacityConatiner>
      );
    }
  } else if (d === 4) {
    //주석!
    if (num === "2~5개월" || num === "5년" || num === "20년" || num === "100년") {
      return (
        <div>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </div>
      );
    } else {
      return (
        <OpacityConatiner>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </OpacityConatiner>
      );
    }
  } else if (d === 5) {
    if (num === "2~5개월" || num === "5년" || num === "20년" || num === "100년" || num === "500년") {
      return (
        <div>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </div>
      );
    } else {
      return (
        <OpacityConatiner>
          <Image src={src}></Image>
          <Txt>{kind}</Txt>
          <Txt>{num}</Txt>
        </OpacityConatiner>
      );
    }
  } else {
    return (
      <OpacityConatiner>
        <Image src={src}></Image>
        <Txt>{kind}</Txt>
        <Txt>{num}</Txt>
      </OpacityConatiner>
    );
  }
}
class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      year: "",
    };
  }
  handleChange(e) {
    this.setState({ year: e.target.value });
  }
  render() {
    const year = this.state.year;
    return (
      <>
        <InputP>
          <InputYear type="text" maxLength="4" name="getYear" value={year} onChange={this.handleChange} autoFocus />
          <Label year={year}>(년도 입력)</Label>
          <PrintYear>년</PrintYear>
        </InputP>
        <ParParent>
          <Parent>
            <ContentsParent>
              <Opacity leftyear={year - 2020} kind="종이" num="2~5개월" sc="/resources/1paper.png"></Opacity>
            </ContentsParent>
            <ContentsParent>
              <Opacity leftyear={year - 2020} kind="우유팩" num="5년" sc="/resources/2milk.png"></Opacity>
            </ContentsParent>
            <ContentsParent>
              <Opacity leftyear={year - 2020} kind="나무젓가락" num="20년" sc="/resources/3chopstick.png"></Opacity>
            </ContentsParent>
            <ContentsParent>
              <Opacity leftyear={year - 2020} kind="일회용컵" num="20년" sc="/resources/4paperCup.png"></Opacity>
            </ContentsParent>
            <ContentsParent>
              <Opacity leftyear={year - 2020} kind="금속캔" num="100년" sc="/resources/5tunaCan.png"></Opacity>
            </ContentsParent>
            <ContentsParent>
              <Opacity leftyear={year - 2020} kind="알루미늄캔" num="500년" sc="/resources/6drinkCan.png"></Opacity>
            </ContentsParent>
            <ContentsParent>
              <Opacity
                leftyear={year - 2020}
                kind="플라스틱병"
                num="500년"
                sc="/resources/7plasticBottle.png"
              ></Opacity>
            </ContentsParent>
            <ContentsParent>
              <Opacity leftyear={year - 2020} kind="스티로폼" num="500년" sc="/resources/8strp.png"></Opacity>
            </ContentsParent>
          </Parent>
          <Description leftyear={year - 2020}></Description>
        </ParParent>
      </>
    );
  }
}
const DesciptionText = styled.div`
  font-size: 40px;
  font-family: "Jua", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin: 50px auto;
`;
const ColorBlue = styled.div`
  color: blue;
  margin: auto auto;
`;
const ColorRed = styled.div`
  color: red;
  margin: 0px 10px;
`;
const Pr = styled.div`
  display: flez;
  width: 100%;
  height: fit-content;
`;
const InputP = styled.div`
  width: 120px;
  margin: 50px auto 70px auto;
  display: flex;
  flex-direction: row;
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 24px;
  color: #95a5a6;
  transition: all 0.2s ease-in-out;
  font-family: "Jua", sans-serif;
  ${({ year }) =>
    year &&
    css`
      left: -70px;
      font-size: 14px;
    `}
`;
const PrintYear = styled.div`
  font-size: 40px;
  font-family: "Jua", sans-serif;
  margin-bottom: 10px;
`;
const InputYear = styled.input`
  font-family: "Jua", sans-serif;
  font-size: 40px;
  outline: none;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  border: none;
  border-bottom: 3px solid #fff;
  background: transparent;
  color: #000;
  :focus ~ Label {
    left: -70px;
    font-size: 14px;
  }
  :focus {
    border: none;
    outline: none;
    border-bottom: 3px solid #555;
  }
`;
const Image = styled.img`
  width: 130px;
  height: 130px;
`;
const Txt = styled.div`
  font-size: 36px;
  text-align: center;
`;
const OpacityConatiner = styled.div`
  opacity: 0.1;
`;
const ParParent = styled.div`
  width: 100%;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: row;
  width: 1400px;
  margin: 0 auto;
`;
const ContentsParent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Jua", sans-serif;
  margin: 0 auto;
`;
export default Trash;
