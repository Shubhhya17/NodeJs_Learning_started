let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port =  process.env.PORT || 7600;

let categoryRouter = express.Router();
let productRouter = express.Router();

const category = [
    [
        {
          "id": 1,
          "category": "Fashion",
          "thumb": "https://i.ibb.co/2dqPp6k/fashion.jpg"
        },
        {
          "id": 2,
          "category": "Electronics",
          "thumb": "https://i.ibb.co/5W4bVbY/electronics.jpg"
        },
        {
          "id": 3,
          "category": "Essentials",
          "thumb": "https://i.ibb.co/0cw34xm/essentials.jpg"
        },
        {
          "id": 4,
          "category": "Footwear",
          "thumb": "https://i.ibb.co/Js3VfF2/footwear.jpg"
        },
        {
          "id": 5,
          "category": "Groceries",
          "thumb": "https://i.ibb.co/YZnY9Jn/groceries.jpg"
        },
        {
          "id": 6,
          "category": "Beauty",
          "thumb": "https://i.ibb.co/r3Q7nZC/beauty.jpg"
        },
        {
          "id": 8,
          "category": "Home Decor",
          "thumb": "https://i.ibb.co/W0Z9J2C/home-decor.jpg"
        }
      ]
      
]

const products = [
    [
        {
          "id": 1,
          "product_name": "Girls top",
          "category": "Fashion",
          "category_id": 1,
          "Price": 2000,
          "Size": "Small",
          "Image": "https://i.ibb.co/fHJ5Tgc/download.jpg",
          "Color": "Maroon",
          "Brand": "Gucci"
        },
        {
          "id": 2,
          "product_name": "Mens T-Shirt",
          "category": "Fashion",
          "category_id": 1,
          "Price": 799,
          "Size": "Medium",
          "Image": "https://i.ibb.co/82KcY3p/men-tshirt.jpg",
          "Color": "Black",
          "Brand": "Nike"
        },
        {
          "id": 3,
          "product_name": "Kids Hoodie",
          "category": "Fashion",
          "category_id": 1,
          "Price": 1199,
          "Size": "Large",
          "Image": "https://i.ibb.co/vv2ZG45/kids-hoodie.jpg",
          "Color": "Blue",
          "Brand": "Adidas"
        },
        {
          "id": 4,
          "product_name": "Women's Sneakers",
          "category": "Footwear",
          "category_id": 2,
          "Price": 2500,
          "Size": "6",
          "Image": "https://i.ibb.co/0m2SqXG/women-sneakers.jpg",
          "Color": "White",
          "Brand": "Puma"
        },
        {
          "id": 5,
          "product_name": "Men's Formal Shoes",
          "category": "Footwear",
          "category_id": 2,
          "Price": 3500,
          "Size": "9",
          "Image": "https://i.ibb.co/vqcdBSH/formal-shoes.jpg",
          "Color": "Brown",
          "Brand": "Woodland"
        }
      ]
      
]




// Serve static files from the 'public' directory
app.get('/', (req, res) => {
    res.send('Hello from Express.js!');
});
// Start the server

  
//MAnual Routes 
app.get('/category', (req, res) => {
    res.json(category);
});
app.get('/products', (req, res) => {
    res.send(products);
});


//?????????????????????????????????
categoryRouter.get('/', (req, res) => {
    res.send(category);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// To run this file, use the command: node fullstack/app.js 
// Make sure you have Express installed: npm install express



