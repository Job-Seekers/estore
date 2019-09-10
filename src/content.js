import React, { Component } from 'react';
import Axios from 'axios';

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: [],
        cart:[],
        modalOpen:false,
        modalProduct:[],
        cartSubTotal:0,
        cartTotal:0,
        cartTax:0,
    }

    componentDidMount(){
        this.setProducts();
      
    }

    setProducts(){

 Axios.get('https://estoreapi.herokuapp.com/products')
.then(response => {
    this.setState({ products: response.data });
  })
.catch(err =>{
    alert(err);
})


    }

    getItem = (_id) =>{

        return this.state.products.find(item => item._id === _id)

    };

    handleDetail = (_id) => {
    
        const product = this.getItem(_id)

        this.setState( () => {

            return {detailProduct:product}
        }

        )
        
    };

    addToCart = (_id) => {
       let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(_id));

        const product = tempProducts[index];
        product.inCart =true;
        product.count=1;
        const price = product.price;
        product.total= price;

        this.setState(
            () => {

                return { products: tempProducts,cart:[...this.state.cart,product]}

            },
            () =>{
                this.addTotals();
            }
        )

    };

openModal= _id => {

    const product = this.getItem(_id);
    this.setState(
        ()=>{
            return {modalProduct:product,modalOpen:true}
        }
    )

};
 closeModal = _id =>{

    this.setState(()=>{
        return {modalOpen:false}
    })
 }

 increment = (_id)=>{

  let tempCart = [...this.state.cart];

  const selectedProduct=tempCart.find(item=>item._id === _id);

  const index= tempCart.indexOf(selectedProduct);

  const product= tempCart[index];

  product.count +=1;

  product.total=product.count * product.price;

  this.setState(()=>{

    return {

        cart:[...tempCart]
    }
  },
  ()=> {
      this.addTotals();
  }
  )
 }

 decrement = (_id) => {

    let tempCart = [...this.state.cart];

    const selectedProduct=tempCart.find(item=>item._id === _id);
  
    const index= tempCart.indexOf(selectedProduct);
  
    const product= tempCart[index];

    product.count -=1;

    if (product.count ===0)
    {
        this.removeItem(_id);
    }
    else{
        product.total=product.count * product.price;

        this.setState(()=>{
      
          return {
      
              cart:[...tempCart]
          }
        },
        ()=> {
            this.addTotals();
        }
        )

    }
 }

 removeItem=(_id) =>{

    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart=tempCart.filter(item => item._id !== _id);

    const index= tempProducts.indexOf(this.getItem(_id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart=false;
    removedProduct.count=0;
    removedProduct.total=0;

    this.setState(()=>{

      
        return {
            
            cart:[...tempCart],
            products:[...tempProducts],
        }
    },
        ()=>{

            this.addTotals();
        }

    )

 }

 clearCart=()=>{

    this.setState(()=>{

        return {
            cart: [],
        }
    },
        ()=>{
            this.setProducts();
            this.addTotals();
        }
    )

 }
addTotals=()=>{
    let subTotal=0;

    this.state.cart.map(item=>(subTotal += item.total))

    const tempTax=subTotal * 0.13;

    const tax = parseFloat(tempTax.toFixed(2));

    const total = subTotal+tax;

    this.setState(()=>{
        return {
            cartSubTotal:subTotal,
            cartTax: tax,
            cartTotal:total
        }
    })

}
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,

            }}>
                {this.props.children}

            </ProductContext.Provider>

        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }