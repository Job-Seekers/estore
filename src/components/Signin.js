import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import {ProductConsumer} from '../content';
import { ButtonContainer } from './Button';

export default class Signin extends Component {


    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            
        }
      

    }
    onChangeHandler=(e) =>{

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        const { username,password} =this.state;
        return (
            <React.Fragment>
            <ProductConsumer>
                {(value)=>{
                return   ( 
                <form onSubmit={
                    ()=>{
                        value.onLogin(this.state);
                    }
                }>
                <div className="container py-5">
                <h1>Login Page</h1>
                <label >Username</label>
                <input type="text" className="form-control" onChange={this.onChangeHandler} name="username" value={username}></input>
                <label >Password</label>
            
                <input className="form-control" type="password" onChange={this.onChangeHandler} name="password" value={password} />
                <div className="container py-5">
                <div className="row"><ButtonContainer >Login</ButtonContainer>
                <small><Link to ="/signup">New User</Link></small>
                </div>
                </div>
            </div>
            </form>
)
                }}
              
            </ProductConsumer>
            
           </React.Fragment>
        )
    }
}
