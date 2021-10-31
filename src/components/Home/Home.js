import React, { Fragment } from "react";
import Products from "./Products";

import './Home.css';
import Footer from "../UI/Footer";
import primeImg from "../../images/home-image.jpg";

const Home = () => {
    return (
        <Fragment>
            <div className="home">
                <div className="home__container">
                    <img className='home__image' src={primeImg} alt="prime-img" />
                    <Products />
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Home;