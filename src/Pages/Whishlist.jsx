import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWhishlist } from '../Slice/whishlist';
import { addToCart } from '../Slice/cartSlice';



function Wishlist() {

  const WhishlistArray = useSelector((state) => state.WhishlistReducer)
  const dispatch = useDispatch();
  const handleWhishlistCart=(product)=>{
    dispatch(addToCart(product));
    dispatch(removeFromWhishlist(product.id));
  }
  return (
    <Row style={{marginTop:'100px'}} className='ps-5'> 
      {
        WhishlistArray?.length>0? WhishlistArray?.map((product, index) =>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem', height: '30rem' }} className='bg-body-tertiary rounded-4'>
            <Card.Img variant="top" src={product?.thumbnail} style={{height:'13rem'}}/>
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Text>
                <p>{product?.description.slice(0,80)}...</p>
                <p>{product?.price}</p>
              </Card.Text>

              <div className='align-items-center justify-content-between d-flex'>
              <Button onClick={() => dispatch(removeFromWhishlist(product.id))} className='btn btn-danger'><i class="fa-solid fa-trash-can text-light"></i></Button>
              <Button onClick={() => handleWhishlistCart(product)}  className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></Button>
              </div>
            </Card.Body>
            </Card>
          </Col>
        )) : <div className='d-flex flex-column align-items-center justify-content-between'>
          <p className='text-danger fs-4 bg-body-tertiary p-4 rounded-5 border'>Wishlist is Empty :/</p>
          <Link style={{textDecoration:'none'}} className='btn btn-primary rounded' to={'/'}>
          Back to Home
          </Link>
        </div>
         }
    </Row>
  )
}

export default Wishlist