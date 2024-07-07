import MenuLink from '../../../components/MenuLink/MenuLink.tsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../state/store.ts';
import './NavMenu.css';

const NavMenu = (props: { setShowMenu: (isOpen: boolean) => void }) => {
  const menuPages = useSelector((state: RootState) => state.home.menuPages);
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
    props.setShowMenu(false);
  };

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
              onClick={() => navigateToPage(el.path)}
              marginLeftValue={20 * i}
            />
          ))}
      </div>
    </div>
  );
};

export default NavMenu;
