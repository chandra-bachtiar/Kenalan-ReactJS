import React from "react";

const makanan = [
   {
      nama: "Soto",
      harga: "12000",
   },
   {
      nama: "Nasi Jamlang",
      harga: "15000",
   },
   {
      nama: "AB Chicken",
      harga: "8000",
   },
   {
      nama: "Mie Ayam",
      harga: "13500",
   },
];

const totalHarga = makanan.reduce((harga,makanan) => {
    return parseInt(harga) + parseInt(makanan.harga);
},0);

const Map = () => {
   return (
      <div>
         <h2>Map</h2>
         <ul>
            {makanan.map((mkn) => (
               <li>
                  {mkn.nama} - {mkn.harga}
               </li>
            ))}
         </ul>

         <h2>Map Filter Harga > 11.000</h2>
         <ul>
            {makanan
               .filter((mkn) => mkn.harga > 11000)
               .map((mkn) => (
                  <li>
                     {mkn.nama} - {mkn.harga}
                  </li>
               ))}
         </ul>

         <h2>Total Harga : {totalHarga}</h2>
      </div>
   );
};

export default Map;
