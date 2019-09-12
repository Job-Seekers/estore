import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../content'
import { ButtonContainer } from './Button';
import {Link} from 'react-router-dom'

export default class Productlist extends Component {




    render() {

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title type="mobile" title="products"></Title>
                        <ProductConsumer>
                {
                    (value) =>{
                        if(value.user.length !== 0){
                        if(value.user["0"].type==='admin'){

                    return <Link to="/addproduct"><ButtonContainer>Add Product</ButtonContainer></Link>
                        }
                    }
                    }
                }
                </ProductConsumer>
                    <div className="row">
                        <ProductConsumer>
                            {
                                (value)=>{
                                return value.products.map(product =>{
                                 
                                    return <Product key={product._id} value={product} />
                                })
                                }
                            }
                        </ProductConsumer>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}