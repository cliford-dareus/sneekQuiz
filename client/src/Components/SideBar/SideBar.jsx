import React from 'react';
import { navList } from '../../Utils/StaticData.js/SideBarData'
import SideBarLinks from './SideBarLinks';

import { SideBarContainer, SideBarLogo, SideBarLogoContainer, SideBarNav, SideBarNavContainer } from '../../Utils/Styles/SideBarStyles'

const SideBar = () => {
  return (
    <SideBarContainer>
        <SideBarLogoContainer>
            <SideBarLogo
                to='/'
            >
                Qness
            </SideBarLogo>
        </SideBarLogoContainer>

        <SideBarNavContainer>
            <SideBarNav>
                { navList.map((link) => (
                    <SideBarLinks link ={link} />
                ))}
            </SideBarNav>
        </SideBarNavContainer>
    </SideBarContainer>
  );
};

export default SideBar;