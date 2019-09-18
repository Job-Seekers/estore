import React, { Component } from 'react'
import { ButtonContainer } from './Button'

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome">
                <div class="container align-items-center">
                    <div class="row align-items-center ">
                        <div class="col">

                            <div class=" text-center">
                                <div class="display-1 text-capitalize w-50 mx-auto">
                                    <h1 className="text-white">Welcome to Smart Bazar</h1>
                                    <a href="/products" class="btn header-link align-items-center ">
                        <ButtonContainer>Shop Now</ButtonContainer>
                                     </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        )
    }
}
