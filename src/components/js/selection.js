import React, { Component } from "react"
import Header from "./Header"
import SelectionCard from "./SelectionCard"
import "../css/selection.css"

export default class Selection extends Component {
    render (){
        const selection = [
            {
                header:'Email Marketing',
                sub: 'With this program, you &#39; ll learn what it takes and everything you need to work.',
            },
            {
                header: 'Campaign Management',
                sub: 'With this program, you&#39ll learn what it takes and everything you need to work.'
            }
        ]
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
                    <div>
                        <div>
                            <h1>Select a course</h1>
                            <h2>To get started, please select a course to begin</h2>
                        </div>
                        <div className="forcastCard">
                            {selection.map((selectionItem) => {
                                return (
                                    <SelectionCard 
                                    header={selectionItem.header}
                                    sub={selectionItem.sub}
                                    />
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}