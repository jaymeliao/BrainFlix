import { NavLink } from 'react-router-dom';

const NoStyleNavLink = ({ to, children, className }) => {
  const noStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <NavLink to={to} style={noStyle} className={className}>
      {children}
    </NavLink>
  );
};

export default NoStyleNavLink;
