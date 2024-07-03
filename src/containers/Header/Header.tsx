import './Header.css';
import { useState, FC } from 'react';
import NavMenu from './NavMenu/NavMenu';

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className='site-header'>
        <h1 className='site-name'>Idris Hussain</h1>
        <div className='menu-nav' onClick={() => setShowMenu(!showMenu)}>
          <span className={showMenu ? 'top showMenu' : 'top'}></span>
          <span className={showMenu ? 'middle showMenu' : 'middle'}></span>
          <span className={showMenu ? 'bottom showMenu' : 'bottom'}></span>
        </div>
        <div className={showMenu ? 'menu-overlay showMenu' : 'menu-overlay'}>
          <NavMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
