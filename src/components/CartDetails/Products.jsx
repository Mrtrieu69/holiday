import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { FaAngleDown, FaAngleUp, FaArrowCircleRight } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { updateProducts } from "../Header/cartSlice"

import showToast from '../../commons/toast'


const Products = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [isDisabled, setIsDisabled] = useState(false)
  const [productsEdit, setProductsEdit] = useState(() => products.reduce((result, product) => ({...result, [product.nameTour] : product.quantity }), {}))

  const toastList = useRef()

  const handleIncrease = (nameTour) => {
    const newProductsEdit = JSON.parse(JSON.stringify(productsEdit))
    newProductsEdit[nameTour]++
    setProductsEdit(newProductsEdit)
  }

  const handleReduced = (nameTour) => {
    const newProductsEdit = JSON.parse(JSON.stringify(productsEdit))
    if(newProductsEdit[nameTour] <= 0) return
    newProductsEdit[nameTour]--
    setProductsEdit(newProductsEdit)
  }

  const handleInput = (nameTour, e) => {
    const newProductsEdit = JSON.parse(JSON.stringify(productsEdit))
    newProductsEdit[nameTour] = +e.target.value
    setProductsEdit(newProductsEdit)
  }

  const handleSave = () => {
    const div = showToast("success")
    setTimeout(() => div.remove(), 3000)
    toastList.current.append(div)
    dispatch(updateProducts(productsEdit))
  }

  const handlePay = () => {
    if(isDisabled){
      const div = showToast("info")
      setTimeout(() => div.remove(), 3000)
      toastList.current.append(div)
      return
    }
    const div = showToast("error", "Cart has not been saved")
    setTimeout(() => div.remove(), 3000)
    toastList.current.append(div)
  }

  useEffect(() => {
    const isDisabled = products.filter(product => product.quantity !== productsEdit[product.nameTour]).length === 0
    setIsDisabled(isDisabled)
  }, [productsEdit, products])

  if(products <=0 ){
    return(
      <div className='flex justify-between items-center py-10 w-90% mx-auto'>
        <p className='text-lg text-text'>No products in the cart...</p>
        <Link to="/tours">
          <button className='btn-custom flex gap-x-3 items-center'>
              Back to the shop
              <FaArrowCircleRight />
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className='py-10 w-90% mx-auto'>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='w-[30%] p-4'>Product</th>
            <th className='text-left w-[20%]'>Price</th>
            <th className='text-left w-[30%]'>Quantity</th>
            <th className='text-left w-[20%]'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <th className='w-[30%] py-4 border-y-2'>
                <div className='flex w-full items-center ml-10'>
                  <a href="#" className='block'>
                    <img className='w-[100px] h-[70px]' src={product.image} alt={product.nameTour} />
                  </a>
                  <a href="#" className='inline-block ml-4 hover:text-primary duration-300 ease-in-out'>{product.nameTour}</a>
                </div>
              </th>
              <td className='text-left w-[20%] border-y-2'>${product.price}</td>
              <td className='w-[30%] border-y-2'>
                <div className="inputNumber">
                  <input type="number" min="0" step="1" value={productsEdit[product.nameTour]} onChange={(e) => handleInput(product.nameTour, e)}/>
                  <div className='controls'>
                    <button  onClick={() => handleIncrease(product.nameTour)}>
                      <FaAngleUp/>
                    </button>
                    <button  onClick={() => handleReduced(product.nameTour)}>
                      <FaAngleDown/>
                    </button>
                  </div>
                </div>
              </td>
              <td className='text-left w-[20%] border-y-2'>${productsEdit[product.nameTour] * product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4'>
        <div className='text-right text-lg font-bold mx-3'>Total: ${products.reduce((result, product) => result + product.price * productsEdit[product.nameTour], 0)}</div>
        <div className='text-right mt-4'>
          <button className='btn-custom' disabled={isDisabled} onClick={handleSave}>SAVE</button>
          <button className='btn-custom'onClick={handlePay}>PAY</button>
        </div>
      </div>
      {/* Toast message */}
      <div ref={toastList} className='fixed top-[12%] right-0 z-[1001]'></div>
    </div>
  )
}

export default Products
