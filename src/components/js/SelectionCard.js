import React, { Component } from "react"

export default class SelectionCard extends Component {
    render () {
        return (
            <div className="selection">
                <div>
                <h1>{this.props.header}</h1>
                <p>{this.props.sub}</p>
                {/* <div>
                    <p>{this.props.work}</p>
                    <p>{this.props.work}</p>
                    <p>{this.props.work}</p>
                </div> */}
                </div>
            </div>
        )
    }
}