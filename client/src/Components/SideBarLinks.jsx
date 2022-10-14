import React from 'react';
import { SideBarNavItem, SideBarNavItemLink } from '../Utils/Styles/SideBarStyles';

const SideBarLinks = ({ link }) => {
    const { title, to, icon } = link;
  return (
    <SideBarNavItem>
        <SideBarNavItemLink to={to}>
            {title}
        </SideBarNavItemLink>
    </SideBarNavItem>
  );
};

export default SideBarLinks;