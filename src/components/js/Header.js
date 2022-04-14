import React, { Component } from 'react'
import '../css/Header.css'

export default class Header extends Component {
    render () {
        return (
            <div>
                <div className="dimeHeader">
                    <div className="dimeImage">
                        <img src= {`icons/Logo-Dime-Hor 1.svg`} alt= "Dime logo"/>
                    </div>
                    <div className="dimeHeaderTwo">
                        <p>Why Dime</p>
                        <p>Products</p>
                        <p>Courses</p>
                        <p>Company</p>
                    </div>
                </div>
            </div>
        )
    }
}