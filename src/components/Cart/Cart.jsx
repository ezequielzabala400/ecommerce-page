import React from 'react'
import { CartContainer, CartList, Divider, EmptyText } from './CartStyles'
import CartItem from '../CartItem/CartItem'

const Cart = ({openCart}) => {
  return (
    <CartContainer openCart={openCart}>
        <h4>Cart</h4>
        <Divider />
        <CartList>
            {/* <EmptyText>Your cart is empty.</EmptyText> */}
            <CartItem />
        </CartList>
    </CartContainer>
  )
}

export default Cart