import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../content';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';


 class Product extends Component{

 

render(){
    const {isAuthenticated,user} = this.props.auth;
    const {_id,title,img,price,inCart} = this.props.value;

    return(

        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
      <div className="card">
          <ProductConsumer>
              {
                  value => (

                    

                  <div className="img-container p-5" onClick={()=>value.handleDetail(_id)}>
                   
                    {   
                            user.name === 'Mukesh P'?
                     <button className="del-btn" 
                    onClick={
                        ()=>{
                        value.deleteProduct(_id);
                        const product = value.getItem(_id)
                      value.openModal(product);
                        }
                    } >
                        <i class="material-icons">
                          delete
                    </i>
                    </button>:true
              }

                  <Link to="/details">
                      <img src ={img} alt="product" className="card-img-top" />
                  </Link>
                  
                  <button className="cart-btn" disabled={!isAuthenticated?true:inCart?true:false} 
                  onClick={
                      ()=>{
                          
                      value.addToCart(_id);
                      const product = value.getItem(_id)
                      value.openModal(product);
                      
                      }
                  }>
                      {!isAuthenticated? (<p className="text-capitalize mb-0" disabled> <Link className="nav-link" to="/login">Sign In</Link></p>):
                    inCart?(<p className="text-capitalize mb-0" disabled> InCart </p>):
                    <i class="material-icons">
                    add_shopping_cart
                    </i> }
                  </button>
                  </div>
      )

              }
        

            </ProductConsumer>
            {/*Card Footer */}

            <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">
                    {title}
                </p>
                <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">
                      $
                    </span>
                    {price}
                </h5>
            </div>
        
      </div>
        </ProductWrapper >
    );
}

}


Product.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { logoutUser })(withRouter(Product));


const ProductWrapper = styled.div `
.card{
    border-color:transparent;
    transition:all 1s linear;

}
.card-footer{
    backgroud:transparent;
    border-top:transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0.2);
        box-shadow:2px 2px 2px 2px rgba(0,0,0.2);
    }
    .card-footer{
        backgroud:rgba(247,247,247);
 
    }
    
}

.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transiton:all 3s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}

del-btn{
    position:absolute;
    top:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    broder:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%)
}


.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    broder:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%)
}

.img-container:hover .cart-btn {

    transform:translate(0,0)
}

.cart-btn:hover{

    color:var(--mainBlue);
    cursor:pointer;
}
.del-btn:hover{

    color:var(--mainBlue);
    cursor:pointer;
}
`;