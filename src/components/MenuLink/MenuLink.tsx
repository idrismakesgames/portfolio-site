import './MenuLink.css';

interface MenuLinkProps {
  linkName: string;
  linkDesc: string;
  linkColour: string;
  marginLeftValue: number;
  onClick: () => void;
}

const MenuLink = ({
  linkName,
  linkDesc,
  linkColour,
  marginLeftValue,
  onClick,
}: MenuLinkProps) => {
  return (
    <div
      className='link'
      onClick={onClick}
      style={{
        borderTop: '4px solid ' + linkColour,
        marginLeft: marginLeftValue,
      }}
    >
      <div className='link-name'>{linkName}</div>
      {linkDesc !== '' && (
        <div className='link-desc' style={{ color: linkColour }}>
          ({linkDesc})
        </div>
      )}
    </div>
  );
};

export default MenuLink;
