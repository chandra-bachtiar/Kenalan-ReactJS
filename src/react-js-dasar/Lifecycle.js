import React, { Component } from 'react'

export default class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             makanan: 'Mie Ayam'
        }
    }
    

    render() {
        return (
            <div>
                <h2>Life Cycle JS => {this.state.makanan}</h2>
            </div>
        )
    }
}
