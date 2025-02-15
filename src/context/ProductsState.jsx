import { useState } from 'react';
// adding the context to monitor states 
import React, { useContext } from "react";
import ProductsContext from "./ProductsContext";
const ProductsState = (props) => {

    const initialProducts = [];
    const [state, setState] = useState(initialProducts);
    const host = "http://localhost:3000";
    const update = async () => {
        try {
            const response = await fetch(`${host}/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            // console.log(response);
            const json = await response.json();
            // console.log(json);
            setState(json);
        } catch (error) {
            console.log(error);
        }
    }
    // add other methods to manipulate productse states
    return (
        <ProductsContext.Provider value={{ state, update }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsState;