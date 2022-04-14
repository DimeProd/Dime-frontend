import React, { Component } from "react"
import Header from "./Header"

export default class Selection extends Component {
    render (){
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <div>
                        <button>Select Course</button>
                        <button>Payment</button>
                    </div>
                </div>
            </div>
        )
    }
}