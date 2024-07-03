import './MenuLink.css';

interface MenuLinkProps {
  linkName: string;
  linkDesc: string;
  linkColour: string;
  marginLeftValue: number;
}

const MenuLink = (props: MenuLinkProps) => {
  return (
    <div
      className='link'
      style={{
        borderTop: '4px solid ' + props.linkColour,
        marginLeft: props.marginLeftValue,
      }}
    >
      <div className='link-name'>{props.linkName}</div>
      <div className='link-desc' style={{ color: props.linkColour }}>
        ({props.linkDesc})
      </div>
    </div>
  );
};

export default MenuLink;
