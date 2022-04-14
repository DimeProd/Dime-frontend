import React, {Component} from "react"
import Header from "./Header"
import '../css/Checkinbox.css'

export default class Checkin extends Component {
    render () {
        return (
            <div>
                <div>
                   <Header/> 
                </div>
                <div className="body">
                <div className=" checkBox">
                    <div className="checkInbox">
                        <img src={`icons/Logo-Dime-Sym 1.svg`} alt="dimelogo"/>
                        <img className="checkImage" src={`icons/checkinbox.svg`} alt="dimelogo"/>
                    </div>
                        
                    <h1>Check your inbox</h1>
                    <h2>We&#39;ve sent you an email containing instructions for resetting your password.</h2>
                    <button>Need more help? Contact Us</button>
                </div>
                </div>
                

            </div>
        )
    }
}