import React from 'react';

import { IoNotificationsOutline } from 'react-icons/io5';
import { MdDarkMode } from 'react-icons/md';

import { useGlobalContext } from '../Contexts/GlobalContext';
import { DashBoardControls, DashBoardHeader, DashBoardProfileContainer, DashBoardThemeControl, DashBoardTitle, DashBoardUsername, DashBoardUserPic } from '../Utils/Styles/DashBoardStyle';

const NavBar = () => {
    const { user } = useGlobalContext();
  return (
    <DashBoardHeader>
        <DashBoardTitle>DashBoard</DashBoardTitle>
        <DashBoardControls>
          <DashBoardThemeControl>
            <IoNotificationsOutline/>
            <MdDarkMode/>
          </DashBoardThemeControl>
          <DashBoardProfileContainer>
            <DashBoardUsername>
              {user.name}
            </DashBoardUsername>
            <DashBoardUserPic>
              {/* User Pic */}
            </DashBoardUserPic>
          </DashBoardProfileContainer>
        </DashBoardControls>
    </DashBoardHeader>
  );
};

export default NavBar;