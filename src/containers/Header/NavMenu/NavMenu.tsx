import MenuLink from '../../../components/MenuLink/MenuLink.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store.ts';
import './NavMenu.css';
import { FC } from 'react';

const NavMenu: FC = () => {
  const menuPages = useSelector((state: RootState) => state.home.menuPages);
  return (
    <div className={'menu-content'}>
      <div className='link-container'>
        {menuPages !== null &&
          menuPages.map((el, i) => (
            <MenuLink
              key={i}
              linkName={el.linkName}
              linkColour={el.linkColour}
              linkDesc={el.linkDesc}
              marginLeftValue={35 * i}
            />
          ))}
      </div>
    </div>
  );
};

export default NavMenu;
