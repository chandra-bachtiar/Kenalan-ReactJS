import React, { Component } from 'react'
import Forms from './Forms'
import { NavbarComponent } from './NavbarComponent'
import { Tabel } from './Tabel'

export default class Crud extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanan: [],
            nama: "",
            jenis: "",
            harga: 0,
            id: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.id === "") {
            this.setState({
                makanan: [
                    ...this.state.makanan,
                    {
                        id: this.state.makanan.length + 1,
                        nama: this.state.nama,
                        jenis: this.state.jenis,
                        harga: this.state.harga
                    }
                ]
            })
        } else {
            const makananTidakDipilih = this.state.makanan.filter(x => x.id !== this.state.id);
            this.setState({
                makanan: [
                    ...makananTidakDipilih,
                    {
                        id: this.state.makanan.length + 1,
                        nama: this.state.nama,
                        jenis: this.state.jenis,
                        harga: this.state.harga
                    }
                ]
            })
        }


        this.setState({
            nama: "",
            jenis: "",
            harga: 0,
        })

        // console.log("Data => ",this.state);
    }

    editData = (id) => {
        const makananDipilih = this.state.makanan.filter(x => x.id === id);
        this.setState({
            id: id,
            nama: makananDipilih[0].nama,
            jenis: makananDipilih[0].jenis,
            harga: makananDipilih[0].harga,
        })
        console.log(makananDipilih)
    }

    deleteData = (id) => {
        const makananHapus = this.state.makanan.filter(x => x.id !== id);
        this.setState({
            makanan: makananHapus,
        })
    }


    render() {
        // console.log(this.state.makanan)
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4">
                    <Tabel makanan={this.state.makanan} editData={this.editData} deleteData={this.deleteData}/>
                    <Forms {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
