import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 Not Found</h1>
      <p className="notfound-description">
        요청하신 페이지를 찾을 수 없습니다.
      </p>
      <button className="notfound-button" onClick={handleGoHome}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFoundPage;
