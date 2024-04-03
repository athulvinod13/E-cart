import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slice/cartSlice';
import { addToWhishlist } from '../Slice/whishlist';




function Home() {

    const data = useFetch('https://dummyjson.com/products');
    

    const dispatch = useDispatch();


  return (
    <Row style={{marginTop:'100px'}} className='ps-5'> 
      {
        data?.length>0? data?.map((product, index) =>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem',height:'27rem'}} className='bg-body-tertiary rounded'>
            <Card.Img variant="top" src={product?.thumbnail} style={{height:'13rem'}} className='rounded'/>
            <Card.Body>
              <Card.Title>{product?.title.slice(0,10)}</Card.Title>
              <Card.Text>
                <p>{product?.description.slice(0,50)}...</p>
                <p>$ {product?.price}</p>
              </Card.Text>

              <div className='align-items-center justify-content-between d-flex'>
              <Button onClick={() => dispatch(addToWhishlist(product))} className='btn btn-info'><i class="fa-solid fa-heart"></i></Button>
              <Button onClick={() => dispatch(addToCart(product))} className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></Button>
              </div>
            </Card.Body>
            </Card>
          </Col>
        )) : <p>Nothing to Display</p>
         }
    </Row>
  )
}

export default Home