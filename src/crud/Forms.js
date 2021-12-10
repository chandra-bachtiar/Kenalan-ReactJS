import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Forms = ({ nama, jenis, harga, handleChange, handleSubmit }) => {
   return (
      <div className="mt-5">
         <Row>
            <Col>
               <h3>Tambah Data Baru</h3>
               <hr />
            </Col>
         </Row>
         <Row>
            <Col>
               <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formMakanan">
                     <Form.Label>Nama Makanan</Form.Label>
                     <Form.Control type="text" autoComplete="off" name="nama" value={nama} onChange={(event) => handleChange(event)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formJenis">
                     <Form.Label>Jenis Makanan</Form.Label>
                     <Form.Control type="text" autoComplete="off" name="jenis" value={jenis} onChange={(event) => handleChange(event)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formHarga">
                     <Form.Label>Harga Makanan</Form.Label>
                     <Form.Control type="number" autoComplete="off" name="harga" value={harga} onChange={(event) => handleChange(event)} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                     Simpan
                  </Button>
               </Form>
            </Col>
         </Row>
      </div>
   );
};

export default Forms;
