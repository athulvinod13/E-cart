import React from 'react'
import { Navbar,Nav, Badge} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




function Header() {
  const whishlist=useSelector((state)=>state.WhishlistReducer)
  const cart=useSelector((state)=>state.cartReducer)
  return (
    <>
        <Navbar expand="lg" className="bg-primary ps-3 pe-3 fixed-top text-light">
        <Navbar.Brand className='text-light fs-4 fw-bold text-start'>
            <Link to={'/'} className=' text-decoration-none text-light fs-4 fw-bold text-start '>
                
                <i>E-CART</i> 
            </Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link>
                <Link to={'/whishlist'}  className='fs-6 fw-bold text-decoration-none text-light'>
                     Whishlist
                    <i class="fa-solid fa-heart ms-2"></i>
                     <Badge   Badge className='bg-success text-white rounded-5 p-2'>{whishlist.length}</Badge>
                </Link>
                </Nav.Link>

            <Nav.Link >
                <Link to={'/cart'} className='fs-6 fw-bold ms-3 text-decoration-none text-light'>
                    Cart
                    <i class="fa-solid fa-cart-shopping ms-2"></i>
                    <Badge className='bg-success text-white rounded-5 p-2'>{cart.length}</Badge>
                </Link>
                </Nav.Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header