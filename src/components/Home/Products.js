import React from "react";
import ProductItem from "./ProductItem";

import './Products.css';

const DUMMY_PRODUCTS = [
    {
        id: "12321341",
        title: "Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking",
        price: 20.96,
        rating: 3,
        image: "https://m.media-amazon.com/images/I/71X8NdnCsvL._SL1500_.jpg"
    },
    {
        id: "49538094",
        title: "The Power of Your Subconscious Mind",
        price: 12.99,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg"
    },
    {

        id: "4903850",
        title: "Allen Solly Men's Jacket",
        price: 40.99,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/61Er0HEUkfL._UL1500_.jpg"

    },
    {
        id: "495380942",
        title: "ASUS VivoBook 15 (2020), 39.6 cm HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 10 Home/Transparent Silver/1.8 Kg), X515MA-BR002T",
        price: 239.0,
        rating: 3,
        image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg"
    },
    {

        id: "49038502",
        title: "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)",
        price: 129.99,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"

    },
    {

        id: "490385022",
        title: "Yonex GR 303 Aluminum Blend Badminton Racquet with Full Cover",
        price: 19.99,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/617Hi4pc0pL._SL1500_.jpg"

    },

]

const Products = () => {
    return (
        <div className="products">
            {DUMMY_PRODUCTS.map(product => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                />
            ))}
        </div>
    )
}

export default Products;