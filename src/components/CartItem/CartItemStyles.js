import styled from "styled-components";

export const ItemWrapper = styled.div`
    margin: auto;
    width: 90%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const ItemImg = styled.div`
    img{
        height: 40px;
        width: 40px;
        border-radius: 10px;
    }
`

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const ItemTitle = styled.p`
    font-size: 1.5rem;
    color: var(--DarkGrayishBlue);
`

export const ItemPrice = styled.p`
    font-size: 1.4rem;
    color: var(--DarkGrayishBlue);
    strong{
        color: var(--Black);
    }
`

export const TrashImg = styled.div`
        cursor: pointer;
    img{
        height: 16px;
        width: 16px;
    }
` 



export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    color: var(--White);
    background-color: var(--Orange);
    border: none;
    cursor: pointer;
`