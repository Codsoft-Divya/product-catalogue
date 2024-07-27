import React from "react";
import Header from "../Header/Header";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

function Home () {
    return (
        <div className="main">
            <div className="main-page">
                <Header />
                <Breadcrumbs />
                <Products />
                <Footer />
            </div>
        </div>
    )
}

export default Home;