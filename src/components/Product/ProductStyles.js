import styled from "styled-components";

export const ProductWrapper = styled.main`
    min-height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    @media (min-width: 768px) {
        flex-direction: row;
        width: 80%;
        margin: auto;
        max-width: 1200px;
        gap: 30px;
        justify-content: center;
}
    @media (min-width: 1200px) {
        gap: 120px
    }
`

export const ImagesContainer = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    img{
        height: 100%;
        width: 100%;
    }
    @media (min-width: 768px) {
        display: none;
    }
`

export const ImagesDesktopContainer = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 400px;
        gap: 20px;
    }
    @media (min-width: 1200px) {
        width: 500px;
    }
`

export const ImageDesktop = styled.div`
    height: 300px;
    width: 300px;
    @media (min-width: 1200px) {
        width: 500px;
        height: 500px;
    }
    img{
        height: 100%;
        border-radius: 20px;
}
`

export const ThumbnailsContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1200px) {
        width: 500px;
    }

    img{
        width: 70px;
        border-radius: 20px;
        cursor: pointer;
        &:hover{
            opacity: 0.6;
        }
        @media (min-width: 1200px) {
        width: 100px;
    }
    }
    
`

export const ArrowLeft = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    position: absolute;
    left: 0;
    top: 50%;
    background-color: var(--White);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    img{
        height: 16px;
        width: 16px;
    }
`
export const ArrowRight = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    position: absolute;
    right: 0;
    top: 50%;
    background-color: var(--White);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    img{
        height: 16px;
        width: 16px;
    }
`

export const ProductInfo = styled.div`
    margin-top: 30px;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: self-start;
    gap: 20px;
    padding-bottom: 30px;
    @media (min-width: 500px) {
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 768px) {
        align-items: start;
    }
`

export const CompanyTitle = styled.h3`
    font-size: 1.4rem;
    color: var(--Orange);
`

export const ProductTitle = styled.h2`
    font-size: 2.8rem;
    max-width: 300px;
    @media (min-width: 500px) {
        text-align:center
    }
    @media (min-width: 768px) {
        text-align: start;
    }
`

export const ProductDescription = styled.p`
    font-size: 1.6rem;
    max-width: 360px;
    @media (min-width: 500px) {
        text-align:center
    }
    @media (min-width: 768px) {
        text-align: start;
    }
`

export const ProductPrices = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
    @media (min-width: 768px) {
        flex-direction: column;
        align-items: start;
    }
`

export const CurrentPrice = styled.strong`
    font-size: 3rem;
    display: flex;
    align-items: center;
    gap: 10px;
    span{
        background-color: var(--PaleOrange);
        color: var(--Orange);
        font-size: 1.5rem;
        padding: 8px;
        border-radius: 10px;
    }
`

export const OldPrice = styled.p`
    font-size: 2rem;
    font-weight: 700;
    text-decoration: line-through;
    color: var(--GrayishBlue);
`

export const BtnsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const CountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    height: 60px;
    width: 300px;
    border-radius: 20px;
    background-color: var(--LightGrayishBlue);
    @media (min-width: 768px) {
        width: 160px;
    }
    p{
        font-size: 2rem;
        font-weight: 700;
    }
    img{
        cursor: pointer;
        &:hover{
        opacity: 0.7;
    }    
    }
`

export const AddBtn = styled.button`
    cursor: pointer;    
    height: 60px;
    width: 300px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    background-color: var(--Orange);
    color: var(--White);
    &:hover{
        opacity: 0.7;
    }
    @media (min-width: 768px) {
        width: 200px;
    }
`