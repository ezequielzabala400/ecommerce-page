import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    position: relative;
    height: 80px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    @media (min-width: 768px) {
        border-bottom: 2px solid var(--LightGrayishBlue);
    }
`

export const NavbarListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const NavbarIconsContainer = styled(NavbarListContainer)`
    gap: 20px;
    img:first-child{
        cursor: pointer;
    }
    img:last-child{
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        &:hover{
            border: 1px solid var(--Orange);

        }
    }
    @media (min-width: 768px) {
        gap: 30px;
        img:last-child{
            height: 40px;
        }
    }
`

export const MenuIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
` 

export const NavbarList = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    display: ${({isToggle}) => isToggle ? 'flex' : 'none'};
    flex-direction: column;
    align-self: center;
    gap: 36px;
    padding: 30px 26px;
    background-color: var(--White);
    z-index: 5;
    @media (min-width: 768px) {
        position: static;
        height: unset;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        margin-left: 40px;
        align-self: center;
        gap: 36px;
        padding: unset;
    }
`

export const NavbarListItem = styled.li`
    font-size: 1.4rem;
    a{
        position: relative;
        color: var(--Black);
        font-weight: 700;

        &:hover::after{
            content: "";
            position: absolute;
            bottom: 0px;
            left: 0;
            background: var(--Orange);
            height: 2px;
            width: 100%;
            @media (min-width: 768px) {
                bottom: -30px;
            }
        }
        @media (min-width: 768px) {
            font-weight: 400;
            color: var(--DarkGrayishBlue);
        }
    }
`

export const CloseMenu = styled.div`
    cursor: pointer;
    display: ${({isToggle}) => isToggle ? 'flex' : 'none'};
`