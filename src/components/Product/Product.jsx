import React, { useEffect, useState } from 'react'
import { AddBtn, ArrowLeft, ArrowRight, BtnsContainer, CompanyTitle, CountContainer, CurrentPrice, ImageDesktop, ImagesContainer, ImagesDesktopContainer, OldPrice, ProductDescription, ProductInfo, ProductPrices, ProductTitle, ProductWrapper, ThumbnailsContainer } from './ProductStyles'
import ProductImg1 from '../../../public/assets/img/image-product-1.jpg'
import ProductImg2 from '../../../public/assets/img/image-product-2.jpg'
import ProductImg3 from '../../../public/assets/img/image-product-3.jpg'
import ProductImg4 from '../../../public/assets/img/image-product-4.jpg'
import ArrowLeftIcon from '../../../public/assets/img/icon-previous.svg'
import ArrowRightIcon from '../../../public/assets/img/icon-next.svg'
import MinusIcon from '../../../public/assets/img/icon-minus.svg'
import PlusIcon from '../../../public/assets/img/icon-plus.svg'
import CartIcon from '../../../public/assets/img/CartWhite.svg'
import ProductDeskImg1 from '../../../public/assets/img/image-product-1-thumbnail.jpg'
import ProductDeskImg2 from '../../../public/assets/img/image-product-2-thumbnail.jpg'
import ProductDeskImg3 from '../../../public/assets/img/image-product-3-thumbnail.jpg'
import ProductDeskImg4 from '../../../public/assets/img/image-product-4-thumbnail.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { image1, image2, image3, image4 } from '../../slices/imagesDesktop'



const imagesList = [ProductImg1,ProductImg2,ProductImg3,ProductImg4];
const Product = () => {

    const [image,setImage] = useState(0);

    const nextImage = () => {
        if(image === 3) return;
        setImage(image + 1)
    }

    const previousImage = () => {
        if(image === 0) return;
        setImage(image - 1)
    }

    const imageDesk = useSelector((state) => state.image);
    const dispatch = useDispatch();

    const findImage = (img) => {
        switch (img) {
            case 'Img1':
                
                return ProductImg1
        
            case 'Img2':
                
                return ProductImg2
        
            case 'Img3':
                
                return ProductImg3
        
            case 'Img4':
                
                return ProductImg4
        
            default:
                break;
        }
    }

    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }

    const subtractCount = () => {
        if(count === 0) return;
        setCount(count - 1)
    }


  return (
    <ProductWrapper>
        <ImagesContainer>
            <ArrowLeft>
                <img src={ArrowLeftIcon} alt="arrow-left" onClick={previousImage}/>
            </ArrowLeft>
                <img src={imagesList[image]} alt="product-image" />
            <ArrowRight>
                <img src={ArrowRightIcon} alt="arrow-right" onClick={nextImage}/>
            </ArrowRight>
        </ImagesContainer>

        <ImagesDesktopContainer>
            <ImageDesktop>
                <img src={findImage(imageDesk)} alt="" />
            </ImageDesktop>
            <ThumbnailsContainer>
                <img src={ProductDeskImg1} alt="" onClick={() => dispatch({type: image1})}/>
                <img src={ProductDeskImg2} alt="" onClick={() => dispatch({type: image2})}/>
                <img src={ProductDeskImg3} alt="" onClick={() => dispatch({type: image3})}/>
                <img src={ProductDeskImg4} alt="" onClick={() => dispatch({type: image4})}/>            
            </ThumbnailsContainer>
        </ImagesDesktopContainer>

        <ProductInfo>
            <CompanyTitle>SNEAKER COMPANY</CompanyTitle>
            <ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
            <ProductDescription>
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything the
                weather can offer.
            </ProductDescription>
            <ProductPrices>
                <CurrentPrice>$125.00 <span>50%</span> </CurrentPrice>
                <OldPrice>$250.00</OldPrice>
            </ProductPrices>
            <BtnsContainer>
            <CountContainer>
                <img src={MinusIcon} alt="Minus-icon" onClick={subtractCount}/>
                <p>{count}</p>
                <img src={PlusIcon} alt="Plus-icon" onClick={addCount}/>
            </CountContainer>
            <AddBtn><img src={CartIcon} alt="Cart-icon" /> Add to cart</AddBtn>
            </BtnsContainer>
        </ProductInfo>
    </ProductWrapper>
  )
}

export default Product