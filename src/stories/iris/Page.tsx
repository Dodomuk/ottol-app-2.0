import React from "react";
import "./page.css";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <section className="storybook-page">
        <h2>안전해서 더욱 자유로운 세상</h2>
        <p>
          세상에서 가장 안전한 이름, 안랩은 안전한 사이버 세상을 만들기 위해
          최선을 다해왔고 앞으로도 그 노력은 계속될 것입니다.{" "}
          <a
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              안전한 세상이 추구하는 궁극적인 목표는 안전 속에서 사람을 자유롭게
              하는 것입니다.
            </strong>
          </a>{" "}
          부모의 보호 아래서 아이가 마음껏 뛰어 노는 자유를 느끼는 것처럼 앞으로
          안랩이 제공할 다양한 솔루션은 안전을 위한 통제를 넘어 안전한 환경
          속에서 사람들이 완전한 자유를 누리며 행복한 삶을 추구하게 하는
          것입니다.
        </p>
        <p>
          안티 바이러스를 포함해 컴퓨터 전반의 보안 솔루션을 제작 및 관리하는
          정보보안업체다. 안랩하면 떠오르는 V3(안티바이러스 소프트웨어) 외에도
          다른 소프트웨어 및 하드웨어 보안 솔루션, 보안 관제, 정보보안 컨설팅,
          해킹사고 조사(A-FIRST), 모바일 보안, 게임 보안, 기타 산업용 제품 보안
          등 다양한 분야에서 보안 사업을 하고 있다. V3는 매출의 40% 정도를
          차지하지만 수익의 대부분이 백신 제품군에서 발생한다는 점이 약점으로
          지적되고 있다.
        </p>
        <h3>클라우드 보안</h3>
        <ul>
          <li>CPP(Cloud Protection Platform)</li>
          <li>vTrusGuard (클라우드에 최적화된 차세대 방화벽)</li>
          <li>vAIPS(클라우드 최적화 네트워크 침입방지 솔루션)</li>
        </ul>
        <h3>클라우드 보안</h3>
        <ul>
          <li>CPP(Cloud Protection Platform)</li>
          <li>vTrusGuard (클라우드에 최적화된 차세대 방화벽)</li>
          <li>vAIPS(클라우드 최적화 네트워크 침입방지 솔루션)</li>
        </ul>
        <p>
          그외 기타 제품이 있으나 자세한 내용은{" "}
          <a
            href="https://storybook.js.org/tutorials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 사이트
          </a>
          에서 확인하자.
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> 국내 정보보안 업계에서 가장 오랜
          역사를 가진 업체이며 주요 5대 국제 인증인{" "}
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          VB100, AV-TEST, AV-Comparatives, Check Mark, ICSA 등을 모두 획득해
          국제적으로 기술력을 공인받고 있다.{" "}
        </div>
      </section>
    </article>
  );
};
