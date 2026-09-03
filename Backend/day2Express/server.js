// console.log("hello");

// let http = require("http");

// let server = http.createServer((req, res) => {
//     console.log("server is working..");
//     res.end("server is giving response.");
// });

// server.listen(3000, () => {
//     console.log("server listen at PORT 3000");
// })

let express = require("express");

let app = express();

let PORT = 3000; 


app.listen(PORT, () => {
    console.log(`server listen at PORT ${PORT}`);
});

app.get("/", (req, res) => {
    console.log("get route is working");
    res.send("sending response from server");
});


app.get("/products", (req, res) => {
    res.send([
        {
            "id": "prod_1001",
            "name": "Wireless Noise-Canceling Headphones",
            "description": "Premium over-ear headphones with active noise cancellation and up to 30 hours of battery life.",
            "price": 199.99,
            "category": "Electronics",
            "stock": 45,
            "rating": 4.8,
            "isFeatured": true,
            "imageUrl": "https://example.com/images/headphones.jpg"
        },
        {
            "id": "prod_1002",
            "name": "Minimalist Ceramic Coffee Mug",
            "description": "A 12oz matte black ceramic mug. Microwave and dishwasher safe.",
            "price": 14.50,
            "category": "Home & Kitchen",
            "stock": 120,
            "rating": 4.5,
            "isFeatured": false,
            "imageUrl": "https://example.com/images/mug.jpg"
        },
        {
            "id": "prod_1003",
            "name": "Organic Cotton Classic T-Shirt",
            "description": "Breathable, unisex crewneck t-shirt made from 100% organic cotton.",
            "price": 24.00,
            "category": "Apparel",
            "stock": 85,
            "rating": 4.2,
            "isFeatured": true,
            "imageUrl": "https://example.com/images/tshirt.jpg"
        },
        {
            "id": "prod_1004",
            "name": "Smart Fitness Watch",
            "description": "Track your heart rate, sleep, and workouts with built-in GPS and waterproof design.",
            "price": 149.00,
            "category": "Electronics",
            "stock": 30,
            "rating": 4.6,
            "isFeatured": false,
            "imageUrl": "https://example.com/images/watch.jpg"
        },
        {
            "id": "prod_1005",
            "name": "Aromatherapy Essential Oil Diffuser",
            "description": "Ultrasonic diffuser with 7 ambient LED light settings and auto shut-off.",
            "price": 32.99,
            "category": "Home & Kitchen",
            "stock": 210,
            "rating": 4.7,
            "isFeatured": false,
            "imageUrl": "https://example.com/images/diffuser.jpg"
        }
    ]);
})
