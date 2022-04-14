import React, {Component} from "react"
import Header from "./Header"
import CustomButton from "../../library/CustomButton"
import '../css/Checkinbox.css'
import '../css/successful.css'

export default class Successful extends Component {
    render () {
        return (
            <div>
                <div>
                   <Header/> 
                </div>
                <div className="body">
                <div className="checkBox">
                    <div className="checkInbox">
                        <img src={`icons/Logo-Dime-Sym 1.svg`} alt="dimelogo"/>
                        <img className="checkImage" src={`icons/tickbox.svg`} alt="dimelogo"/>
                    </div>
                        
                    <h1>Password reset successful</h1>
                    <h2>Good job. Your new password is setup, continue to
                            sign in to your dashboard.</h2>
                    <CustomButton  buttonWidth="25rem" buttonHeight="2.8rem">Log In</CustomButton>
                </div>
                </div>
            </div>
        )
    }
}