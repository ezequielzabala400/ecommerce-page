import styled from "styled-components";

export const CartContainer = styled.div`
    display: ${({openCart}) => openCart ? 'block' : 'none'};
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;
    width: 90%;
    border-radius: 10px;
    max-width: 350px;
    background-color: var(--White);
    z-index: 4;
    box-shadow: 0px 6px 16px var(--GrayishBlue);

    @media (min-width: 768px) {
        left: unset;
        right: 0;
        transform: translateX(0);
    }

    @media (min-width: 1400px) {
        right: -100px;
    }

    h4{
        padding: 20px 12px;
        font-size: 1.7rem;
    }

`

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: var(--GrayishBlue);
`

export const CartList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    overflow: auto;
` 

export const EmptyText = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--DarkGrayishBlue);
`