import React, { useState } from 'react'
import { CloseMenu, MenuIconContainer, NavbarIconsContainer, NavbarList, NavbarListContainer, NavbarListItem, NavbarWrapper } from './NavbarStyles'
import MenuIcon from '../../../public/assets/img/icon-menu.svg';
import LogoIcon from '../../../public/assets/img/logo.svg';
import CartIcon from '../../../public/assets/img/icon-cart.svg';
import UserIcon from '../../../public/assets/img/image-avatar.png';
import CloseIcon from '../../../public/assets/img/icon-close.svg'
import Cart from '../Cart/Cart';
const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const handleMenu = () => setIsToggle(!isToggle)
    const handleCart = () =>setOpenCart(!openCart)

  return (
    <NavbarWrapper>
        <NavbarListContainer>
            <MenuIconContainer onClick={handleMenu}>
                <img src={MenuIcon} alt="Menu-icon" />
            </MenuIconContainer>
            <img src={LogoIcon} alt="Logo" />
            <NavbarList isToggle={isToggle}>
                <CloseMenu isToggle={isToggle}>
                    <img src={CloseIcon} alt="Close-icon" onClick={handleMenu} />
                </CloseMenu>
                <NavbarListItem><a href="#">Collections</a></NavbarListItem>
                <NavbarListItem><a href="#">Men</a></NavbarListItem>
                <NavbarListItem><a href="#">Women</a></NavbarListItem>
                <NavbarListItem><a href="#">About</a></NavbarListItem>
                <NavbarListItem><a href="#">Contact</a></NavbarListItem>
            </NavbarList>
        </NavbarListContainer>
        <NavbarIconsContainer>
            <img src={CartIcon} alt="Cart-icon" onClick={handleCart}/>
            <img src={UserIcon} alt="User" />
        </NavbarIconsContainer>
        <Cart openCart={openCart}/>
    </NavbarWrapper>
  )
}

export default Navbar