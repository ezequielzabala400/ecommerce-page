import React from 'react'
import { Button, ItemContainer, ItemImg, ItemInfo, ItemPrice, ItemTitle, ItemWrapper, TrashImg } from './CartItemStyles'
import icon from '../../../public/assets/img/image-product-1-thumbnail.jpg'
import TrashIcon from '../../../public/assets/img/icon-delete.svg'
const CartItem = () => {
  return (
    <ItemWrapper>
        <ItemContainer>
            <ItemImg>
                <img src={icon} alt="" />
            </ItemImg>
            <ItemInfo>
                <ItemTitle>Fall Limited Edition Sneakers</ItemTitle>
                <ItemPrice>$125.00 x <span>3</span> <strong>$375.00</strong></ItemPrice>
            </ItemInfo>
            <TrashImg><img src={TrashIcon} alt="" /></TrashImg>
        </ItemContainer>
        <Button>Checkout</Button>
    </ItemWrapper>
  )
}

export default CartItem