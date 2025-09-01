import React from "react";

const NotReadyPage: React.FC = () => {
  return (
    <div className="not-ready-page">
      <h1 className="not-ready-title">⏳ 준비중입니다.</h1>
      <p className="not-ready-message">
        🚧 해당 페이지는 아직 개발 중입니다. 조금만 기다려주세요! 🙏
      </p>
    </div>
  );
};

export default NotReadyPage;
