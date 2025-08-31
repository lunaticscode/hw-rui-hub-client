import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">rui-hub</span>
        <nav className="header-nav">
          <a href="/foundation" className="header-nav-item">
            Foundation
          </a>
          <a href="/component" className="header-nav-item">
            Component
          </a>
        </nav>
      </div>
      <div className="header-right">
        <button className="header-profile-btn">
          <span className="header-profile-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
