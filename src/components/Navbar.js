import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import {ProductConsumer} from '../content'
/*Navbar */
export default class Navbar extends Component {
    render() {

        return (
           
                    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">

                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-5">
                                <Link to="/" className="nav-link">
                                    Home
                        </Link>
                            </li>

                            <li className="nav-item ml-5">
                                <Link to="/products" className="nav-link">
                                    Products
                         </Link>
                            </li>
                        </ul>
                        <ProductConsumer>

                    {  ( value) =>   {

                        if(!value.signin){
                            return(
                        <Link to="/signin" className="ml-auto"  ><ButtonContainer >
                            Login</ButtonContainer>
                        </Link>)}
                        else{
                         return (<Link to="/cart" className="ml-auto">
                            <ButtonContainer >
                                <i class="material-icons">
                                    shopping_cart
                             </i>
                                CART
                        </ButtonContainer>
                        </Link>)
                            }
                            }}
                        </ProductConsumer>
                    </NavWrapper>
          
        );
    }

}


const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-tranform: capitalize !important;
}

`;
