import React from "react";
import "./Products.css";

const Products = ({productItems}) =>{
    return (
       <div className="products">
        {productItems.map((productItem) =>(
            <div className="card">
                <div>
                    <img className="product-image" src ={productItem.image} alt={productItem.name}/>
                </div>

                <div>
                    <h3 className="product.name">
                        {productItem.name}
                    </h3>
                </div>

                <div className="product-price"> ${productItem.price}</div>

                <div >
                    <button className="product-add-button">Book Car</button>
                </div>

            </div>
        ))}

       </div>
    );
};

export default Products;