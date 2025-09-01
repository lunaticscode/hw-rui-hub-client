import React from "react";
import { Outlet } from "react-router-dom";

const FoundationPage: React.FC = () => {
  return (
    <div className="foundation-page">
      <header className="foundation-page-header">
        <h1 className="foundation-page-title">Foundation</h1>
        <p className="foundation-page-description">
          디자인 시스템의 핵심 원칙과 토대를 소개합니다. 일관된 사용자 경험을
          위해 색상, 타이포그래피, 아이콘 등 기본 요소들을 정의합니다.
          <br />
          또한, 이 페이지를 통해 실제 디자인시스템 패키지에 적용되는 foundation
          요소(예: color, spacing, radius 등)의 값을 직접 조정하여 반영할 수
          있습니다.
        </p>
      </header>
      <section className="foundation-page-content">
        {/* 여기에 sub-path별 컨텐츠가 렌더링됩니다. */}
        <Outlet />
      </section>
    </div>
  );
};

export default FoundationPage;
