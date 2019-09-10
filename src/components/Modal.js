import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../content'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {

                        const { modalOpen, closeModal } = value;
                        const { img, title, price } = value.modalProduct;
                        if (!modalOpen)
                            return null;
                        else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className=" col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                                <h5>Item Added to the Cart</h5>
                                                <img src={img} className="img=fluid" alt="product"/>
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">Price: ${price}</h5>
                                                <Link to="/products">
                                                    <ButtonContainer 
                                                     onClick={()=> closeModal()}
                                                    >Back To Shopping</ButtonContainer>
                                                </Link> <br></br>
                                                <Link to="/cart">
                                                    <ButtonContainer onClick={()=> closeModal()} >Go To Cart</ButtonContainer>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                </ModalContainer>)
                        }

                    }
                }
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
backgroud:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:center;

#modal{
    background:#f3f3f3;
};

`;