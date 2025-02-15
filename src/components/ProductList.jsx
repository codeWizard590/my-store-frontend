import { useState } from 'react';

import react, { use } from 'react';
import { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import { useEffect } from 'react';

const ProductList = () => {
    const a = useContext(ProductsContext);
    const { state, update } = a;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await a.update();
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
            // a.update();
        };
        fetchData();
    }, []);

    // if (state.length === 0) {
    //     return <h1>loading ....</h1>
    // }
    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Loading products...</p>
            </div>
        );
    }
    // null checks if product spec are empyt.
    const listItems = state.map(product =>
        <tr key={product?.id}>
            <td>{product?.productName}</td>
            <td>{product?.description}</td>
            <td>{product?.price}</td>
            <td>{product?.stockQuantity}</td>
            <td>{product?.category?.categoryName}</td>
        </tr>
    );

    return (
        <>
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock Quantity</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default ProductList;