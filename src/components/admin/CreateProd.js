import React, { Component } from 'react'
import { ButtonContainer } from '../Button';
import axios from 'axios'

export default class CreateProd extends Component {
constructor(props){
super(props)

this.state={
    id:'',
    info:'',
    title:'',
    price:'',
    company:'',
    img:'',
  
  }


}
   
onSubmit=(e)=>{

const product={
    
    info:this.state.info,
    title:this.state.title,
    price:this.state.price,
    company:this.state.company,
    img:this.state.img,
    inCart:false,
    count: 0,
    total:0,
}

axios.post('https://estoreapi.herokuapp.com/products/add',product)
.then(res=>console.log(res.data))

e.preventDefault();

}


onChangeInfo=(e)=>{

    this.setState({
        info:e.target.value
    })
}

onChangeTitle=(e)=>{

    this.setState({
        title:e.target.value
    })
}

onChangeImg=(e)=>{

    this.setState({
        img:e.target.value
    })
}

onChangePrice=(e)=>{

    this.setState({
        price : Number (e.target.value)
    })
}
onChangeCompany=(e)=>{

    this.setState({
        company : e.target.value
    })
}



    render() {
        return (
            <div className="container ">               
                    <label >Title</label>
                    <input type="text" className="form-control"  onChange={this.onChangeTitle} name={this.state.title}></input>
                    <label >Enter Price of the product</label>
                    <input type="text" className="form-control"  onChange={this.onChangePrice} name={this.state.price}></input>
                    <label >Enter company</label>
                    <input type="text" className="form-control"  onChange={this.onChangeCompany} name={this.state.company}></input>
                    <label >Enter Information Of Product</label>
                    <input type="text" className="form-control"  onChange={this.onChangeInfo} name={this.state.info}></input>            
                    <label >Upload Image</label>
                    <input className="form-control" type="text"  onChange={this.onChangeImg} name={this.state.info} />
                   <ButtonContainer onClick={this.onSubmit}>Add Product</ButtonContainer>
            
            </div>
        )
    }
}
