import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan: 'Bakso'
        }
    }

    ganti = (val) => {
        this.setState({
            makanan: val
        })
    }


    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <button onClick={() => this.ganti('Mie Ayam')}>Ganti</button>
                <Operan makanan={this.state.makanan} ganti={this.ganti} />
            </div>
        )
    }
}
