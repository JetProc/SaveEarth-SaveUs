import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }
  render() {
    return (
      <Container>
        <Bar to="/">
          <Left>
            <But to="/Ocean">해양오염</But>
            <But to="/Electricity">전기낭비</But>
            <But to="/Trash">쓰레기오염</But>
          </Left>
          <TextText>
            <Text>
              <b>
                Save US, <br />
                Save Earth
              </b>
            </Text>
          </TextText>
          <Right>
            <But to="/Disposable">일회용품</But>
            <But>Solution</But>
            <But>Others</But>
          </Right>
        </Bar>
      </Container>
    );
  }
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Jua", sans-serif;
`;
const Bar = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 95%;
  height: 140px;
  margin: 10px 0px 0px 0px;
  text-align: center;
  text-decoration: none;
  color: #1e3799;
  border-radius: 20px;
  background: #d0d8e2;
  box-shadow: 4px 4px 10px #53565a, -4px -4px 10px #ffffff, inset 0px 0px 0px #53565a, inset 0px 0px 0px #ffffff;
  transition: all 0.35s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px #53565a, 0px 0px 0px #ffffff, inset 4px 4px 10px #53565a, inset -4px -4px 10px #ffffff;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

const But = styled(Link)`
  width: 184px;
  height: 110px;
  margin: 0px 6px 0px 6px;
  line-height: 110px;
  align-self: center;

  font-size: 30px;
  text-decoration: none;
  color: black;

  border-radius: 20px;
  background: #d0d8e2;
  box-shadow: 4px 4px 10px #53565a, -4px -4px 10px #ffffff, inset 0px 0px 0px #53565a, inset 0px 0px 0px #ffffff;
  transition: all 0.15s linear;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px #53565a, 0px 0px 0px #ffffff, inset 4px 4px 10px #53565a, inset -4px -4px 10px #ffffff;
  }
`;

const TextText = styled.div`
  height: 140px;
  display: table;
  overflow: hidden;
`;

const Text = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-size: 40px;
`;

export default Topbar;
