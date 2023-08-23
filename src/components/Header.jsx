import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__flex">
          <div className="header__logo">Покемоны API</div>

          <div className="header__alert">
            <span>Нажмите на нужного Покемона</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
