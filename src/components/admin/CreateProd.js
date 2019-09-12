import React, { Component } from 'react'
import { ButtonContainer } from '../Button';
import axios from 'axios';
import {ProductConsumer} from '../../content';
import { number } from 'prop-types';

export default class CreateProd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: '',
            title: '',
            price: '',
            company: '',
            img: '',
        }
      

    }

   
    onChangeHandler=(e) =>{

        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render() {
        const { info,title,price,company,img} =this.state
        return (

            <ProductConsumer>
                {(value) => {

                    return(
            <div className="container ">
               
                <label >Title</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="title" value={title}></input>
                <label >Enter Price of the product</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="price" value={price}></input>
                <label >Enter company</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="company" value={company}></input>
                <label >Enter Information Of Product</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="info" value={info}></input>
                <label >Upload Image</label>
                <input className="form-control" type="text" onChange={this.onChangeHandler} name="img" value={img} />
                <ButtonContainer onClick={
                                        ()=>{
                                            value.onSubmit(this.state);

                                            value.openModal(this.state);
                                        }
                                    }>Add Product</ButtonContainer>
    
           
            </div>
            )
             }

}
            </ProductConsumer>
                    )
    }
}
