import React from "react";
import { Table, Button } from "react-bootstrap";

export const Tabel = ({ makanan, editData, deleteData }) => {
   return (
      <Table striped bordered hover>
         <thead>
            <tr>
               <th>#</th>
               <th>Nama Makanan</th>
               <th>Jenis Makanan</th>
               <th>Harga Makanan</th>
               <th>Aksi</th>
            </tr>
         </thead>
         <tbody>
            {makanan.map((makanan, index) => {
               return (
                  <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{makanan.nama}</td>
                     <td>{makanan.jenis}</td>
                     <td>{makanan.harga}</td>
                     <td>
                        <Button variant="warning" size="sm" onClick={() => editData(makanan.id)}>
                           Edit
                        </Button>
                        <Button variant="danger" size="sm" className="ms-2" onClick={() => deleteData(makanan.id)}>
                           Delete
                        </Button>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </Table>
   );
};
