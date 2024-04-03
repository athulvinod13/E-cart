import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {emptyCart, removeFromCart} from '../Slice/cartSlice'
import { Button } from 'react-bootstrap'
function Cart() {
  const cartArray=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [total,setTotal]=useState(0)

  const getTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((a,b)=>a+b))
    }
    else{
      setTotal(0)
    }
  }
  const handleClear=()=>{
    dispatch(emptyCart())
    alert('Your order is placed.... thank you for your order')
    navigate('/')
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])
  return (
    <div style={{marginTop:'100px',paddingLeft:'20px',paddingRight:'20px'}}>
      {
        cartArray.length>0?
        <div className='row mt-5 ms-1'>
          <div className='col-lg-8'>
                <table className='table shadow border w-75'>
                  <thead >
                    <tr >
                      <th className='bg-info'>#</th>
                      <th className='bg-info'>Product</th>
                      <th className='bg-info'>Product Image</th>
                      <th className='bg-info'>Price</th>
                      <th className='bg-info'>action</th>
                    </tr>
                  </thead>
                  <tbody>{
                    cartArray.map((product,index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.title}</td>
                        <td><img width={100} height={100} src={product.thumbnail} alt="" /></td>
                        <td>{product.price}</td>
                        <td> <Button onClick={() => dispatch(removeFromCart(product.id))} className='btn btn-danger'><i class="fa-solid fa-trash-can text-light"></i></Button></td>
                      </tr>
                    ))
      }</tbody>
                </table>
          </div>

          <div className="col-lg-4">
            <div className='border mb-3 shadow rounded p-3 w-100'>
              <h1 className='text-primary '>Cart Summary</h1>
              <h4>Total products: <span className='text-success'>{cartArray.length}</span></h4>
              <h4>Total price:<span className='text-success'>${total}</span></h4>
              <div className='d-grid'>
              <button onClick={()=>handleClear()} className='btn btn-primary mt-5 rounded'>Check Out</button>
            </div>
            </div>
            
          </div>

        </div>:<div className='d-flex flex-column align-items-center justify-content-between'>
          <p className='text-danger fs-4 bg-body-tertiary p-4 rounded-5 border'>Cart Empty :/</p>
          <Link style={{textDecoration:'none'}} className='btn btn-primary rounded' to={'/'}>
          Back to Home
          </Link>
        </div>

      }
      
      </div>
  )
}

export default Cart