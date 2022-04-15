import React, { useMemo } from 'react'
import { Link } from "react-router-dom"

import { FaTimes } from "react-icons/fa"
import { useDispatch } from 'react-redux'

import { removeProduct } from "./cartSlice"
import styles from "./Header.module.css"

const Cart = ({products, onChangeLink}) => {
    const dispatch = useDispatch()
    const total = useMemo(() => {
        return products.reduce((result, product) => result + (product.price * product.quantity), 0)
    }, [products])

    const handleRemoveFromCart = (id) => {
        dispatch(removeProduct(id))
    }   


    return (
        <>
            <ul className={styles.cartInfoList}>
                {products.map(product => 
                    <li key={product.id} className={styles.cartInfoItem}>
                        <img src={product.image} alt="Image" />
                        <div className={styles.cartItemDesc}>
                            <a href="#" className={styles.cartItemLink}>{product.nameTour}</a>
                            <p className={styles.cartItemQuantity}>Quantity: {product.quantity}</p>
                            <p className={styles.cartItemPrice}>${product.price * product.quantity}</p>
                        </div>
                        <FaTimes onClick={() => handleRemoveFromCart(product.id)} className={styles.cartItemDelete}/>
                    </li>
                )}
            </ul>
            <div className={styles.cartInfoTotal}>
                <div className={styles.cartInfoTotalPrice}>
                    <span>Order total:</span>
                    <span>${total}</span>
                </div>
                <Link to="/cart" onClick={onChangeLink}>
                    <button className={styles.cartInfoView}>
                        VIEW CART AND CHECK OUT
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Cart
