import React from "react";
import Header from "../Header/Header";
import { Rating } from "@mui/material";
import './DescriptionPage.css'

function DescriptionPage ({data = {} }) {
    const {title, price, description, category, image, rating} = data;
    return (
        <div className="description">
            <div className="description-head">
                <Header />
            </div>
            <div className="description-section">
                <div className="description-sectin left">
                    <img src={image} alt={title} height={200} width={175} />
                </div>
                <div className="description-section-right">
                    <div className="description-section-right-title">
                        {title}
                    </div>
                    <div className="description-section-right-price">
                        {price}
                    </div>
                    <div className="description-section-right-stars">
                        <Rating 
                        value={rating.rate}
                        />({rating.count})
                    </div>
                    <div className="description-section-right-desc">
                        {description}
                    </div>
                    <div className="description-section-right-cart">
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionPage;