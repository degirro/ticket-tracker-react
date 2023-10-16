import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { logoutUser as logoutUserAPI } from '../../utils/api'
import { LogoutContainer, LogoutText } from '../../utils/styles/sidebar/SidebarLogoutStyled'

export const SidebarLogout = () => {

  const clickLogout = async () => {
    await logoutUserAPI();
    window.location.reload();
}

  return (
    <LogoutContainer onClick={clickLogout}>
        <LogoutText>Logout</LogoutText>
        <FiLogOut />
    </LogoutContainer>
  )
}
