import React, { Component } from "react";
import "./Solution.css";
const Solution = () => {
  return (
    <div className="SectionArea">
      <div className="Section">
        <hr />
        <div className="Title">1. 일회용품 줄이기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/Ecobag.jpg" className="VerticalImg"></img>
          <div className="Content-Instruction">
            일회용품은 말 그대로 한 번 사용하고 버리는 용도로 나온 용품들이다. <br />
            종이컵, 종이 도시락, 배달 용기, 나무젓가락, 식품포장 랩 등등이 해당된다. <br />
            하지만 일회용품은 분해되는 데 굉장히 많은 시간이 소요된다. <br />
            우유팩은 5년, 나무젓가락은 20년, 플라스틱 병은 500년 이상 소요된다. <br />
            그러니 비닐 봉투 대신 장바구니나 에코백을, 일회용컵, 종이컵 대신 텀블러를 사용하자.
          </div>
        </div>
      </div>
      <div className="Section">
        <hr />
        <div className="Title">2. 대중교통 이용하기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/busstop.jpg" className="HorizontalImg"></img>
          <div className="Content-Instruction">
            매년 9월 22일은 세계 2천여 도시가 함께하는 세계 차 없는 날이다.
            <br /> 1년 중 단 하루만이라도 자가용을 타지 말자는 상징적인 내용을 담고 있다. <br />
            자가용 이용을 줄이면 대기오염, 소음, 교통체증을 줄일 수 있으니 가능하면 대중교통을 애용하도록 하자.
          </div>
        </div>
      </div>
      <div className="Section">
        <hr />
        <div className="Title">3. 분리수거 하기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/Disposable.jpg" className="HorizontalImg"></img>
          <div className="Content-Instruction">
            재활용 분리수거는 그냥 땅에 묻히면 토양오염과 대기오염을 유발할 수 있는 용품들을 분리하여 다시 쓰일 수 있는
            것으로 탈바꿈하게 해주는 것이다. <br />
            예를 들어 콜라나 소주병의 경우 흠짐이 없으면 공장으로 들어가 깨끗이 세척된 후 완제품으로 재이용된다. <br />
            불필요한 생산비용과 쓰레기 처리 비용을 절감해주는 분리수거도 생활화할 필요가 있다.
          </div>
        </div>
      </div>
      <div className="Section">
        <hr />
        <div className="Title">4. 천연세제 이용하기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/NaturePongpong.jpg" className="HorizontalImg"></img>
          <div className="Content-Instruction">
            보통 우리가 사용하는 세제에는 환경에 무해한 성분들이 다량 함유되어 있다. <br />
            일반 세제에 들어 있는 화학성분은 환경오염뿐 아니라 우리의 건강에도 나쁜 영향을 끼치니, 천연 세제의 1인자인
            베이킹 소다를 활용해보자. <br />
            생각보다 깨끗하게 얼룩을 지워주는 효과에 놀랄 것이다.
          </div>
        </div>
      </div>
      <div className="Section">
        <hr />
        <div className="Title">5. 손수건 사용하기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/HandTower.jpg" className="HorizontalImg"></img>
          <div className="Content-Instruction">
            휴지도 일종의 일회용품이다. <br />
            휴지를 완전히 대체할 수 있는 용품이 있는 건 아니지만, 적어도 공중 화장실에서 우리가 손을 씻고 나서 애용하는
            페이퍼타월 대신에 손수건을 사용할 수는 있을 것이다. <br />
            페이퍼타월 소비량만 줄여도 나무도 아끼고 환경도 보호할 수 있을 것이다.
          </div>
        </div>
      </div>
      <div className="Section">
        <hr />
        <div className="Title">6. 안 쓰는 플러그 뽑기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/Plug.jpg" className="HorizontalImg"></img>
          <div className="Content-Instruction">
            가정에서 사용하는 에너지의 10% 정도가 대기전력으로 낭비되는데, 이렇게 낭비되는 에너지를 국가 단위로 환산하면
            연간 5000억 원 정도의 손실금액이 발생한다. <br />
            전원을 꺼둔 제품이더라도 대기전력을 방지하기 위해 플러그를 꼭 뽑아놓는 게 좋다.
          </div>
        </div>
      </div>
      <div className="Section">
        <hr />
        <div className="Title">7. 짧게 샤워하기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/Sower.jpg" className="VerticalImg"></img>
          <div className="Content-Instruction">
            샤워시간을 1분 줄이면 12L의 물을 줄일 수 있다. <br />
            보통 권장되는 샤워시간은 5분 정도라고 하는데, 샤워기 옆에 모래시계를 두어 시간을 체크하는 것도 좋은
            방법이다. <br />물 부족으로 아파하고 있는 지구를 생각해서 샤워 시간을 줄이는 번거로움도 감수할 만하지
            않을까.
          </div>
        </div>
      </div>
      <div className="Section">
        <hr />
        <div className="Title">8. 전자 문서 이용하기</div>
        <hr />
        <div className="Contents">
          <img src="/resources/ElectricPaper.jpg" className="HorizontalImg"></img>
          <div className="Content-Instruction">
            전자 영수증, 모바일 청구서 등을 이용하는 '페이퍼리스'는 종이 대신 전자 문서를 이용하는 것으로, 환경 보호뿐
            아니라 효율성 증가, 비용 절감 등의 효과까지 볼 수 있다. <br />
            2012년 기준 종이영수증 연 발행 건수는 310억 건으로 약 2,500억 원의 비용이 들고, 영수증 생산과 폐기 과정에서
            소요되는 온실가스 배출량도 약 5만 톤에 달한다. <br />
            종이 문서 대신 전자 문서 이용을 늘이면 그만큼의 환경 보호 효과를 볼 수 있다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
