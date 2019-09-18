import React, { Component } from 'react'
import { ButtonContainer } from './Button';
import {ProductConsumer} from '../content';


export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            password: '',
            fullname: '',
            email: '',
            country: '',
            phone: '',
        }
      

    }

   
    onChangeHandler=(e) =>{

        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render() {
        const { Username,password,fullname,email,country,phone} =this.state
        return (

            <ProductConsumer>
                {(value) => {

                    return(
            <div className="container ">
               
                <label >Username</label>
                <input type="text" className="form-control required" onChange={this.onChangeHandler} name="Username" value={Username}></input>
                <label >password</label>
                <input type="password" className="form-control required" onChange={this.onChangeHandler} name="password" value={password}></input>
                <label >Full Name</label>
                <input type="text" className="form-control required" onChange={this.onChangeHandler} name="fullname" value={fullname}></input>
                <label >Email</label>
                <input type="text" className="form-control required" onChange={this.onChangeHandler} name="email" value={email}></input>
                <label >country</label>
                <input className="form-control required" type="text " onChange={this.onChangeHandler} name="country" value={country} />
                <label >Phone</label>
                <input className="form-control required" type="text " onChange={this.onChangeHandler} name="phone" value={phone} />
                <div className="container py-5">
                <ButtonContainer  onClick={
                                        ()=>{
                                            value.onSignup(this.state);
                                        }
                                    }>Register</ButtonContainer>
    
           </div>
            </div>
            )
             }

}
            </ProductConsumer>
                    )
    }
}
