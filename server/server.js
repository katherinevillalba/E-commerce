const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Monitor Asus Tuf Gaming 28', 
      oldPrice: 1200000, 
      price: 900000, 
      urlImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2NfCa4_0YNQs7UnN9vJyme_iqPuzoCDHDAzbYfALlBo7oyZeUhtY0orBdd2HfoV30Jx8Sz1fQZbbAoGja_GtUW5Hcfz3I352Fsm5fHFs&usqp=CAE'
    },
    {
      id: 2, 
      name: 'Silla ergonomica',  
      oldPrice: 210500, 
      price: 160000, 
      urlImg: 'https://images.fravega.com/f500/7be9821d40de46728983bfadd9efe4c8.jpg' 
    },
    { 
      id: 3, 
      name: 'Dock Station Dell',  
      oldPrice: 3500500, 
      price: 280000, 
      urlImg: 'data:image/jpeg;base64,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' 
    },
    { 
      id: 3, 
      name: 'Taza Java De Programacion',  
      oldPrice: 8500, 
      price: 4500, 
      urlImg: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSE5ASb1YijDcLmWex8u8hP3YKNUW9ETe2q_eZ_kFW5cp5ZzzIcq5Cg-3QUEKvYqj5xBAGzr8YW1qs8A1zQgKtX3-RB0bm7ihh215uLCCyst1hND4sDbpjd&usqp=CAEp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});