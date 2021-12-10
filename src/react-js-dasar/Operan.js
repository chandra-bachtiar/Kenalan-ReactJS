import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const {makanan,ganti} = this.props;
        return (
            <div>
                <h2>Operan Staate Menjadi Props : {makanan}</h2>
                <button onClick={() => ganti('Mie Ayam')}>Ganti</button>
            </div>
        )
    }
}
