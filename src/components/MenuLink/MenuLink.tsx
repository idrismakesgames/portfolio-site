import './MenuLink.css';

interface MenuLinkProps {
  linkName: string;
  linkDesc: string;
  linkColour: string;
  marginLeftValue: number;
  onClick: () => void;
}

const MenuLink = (props: MenuLinkProps) => {
  return (
    <div
      className='link'
      onClick={props.onClick}
      style={{
        borderTop: '4px solid ' + props.linkColour,
        marginLeft: props.marginLeftValue,
      }}
    >
      <div className='link-name'>{props.linkName}</div>
      {props.linkDesc !== '' && (
        <div className='link-desc' style={{ color: props.linkColour }}>
          ({props.linkDesc})
        </div>
      )}
    </div>
  );
};

export default MenuLink;
