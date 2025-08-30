import React from 'react'
import ProductList from '../../composites/productList/ProductList'
// import Login from "../../composites/login/Login"; 

function HomePage() {
    return (
        <div>
            <h1 className="text-center mt-5">Welcome to Art-station</h1>
            <ProductList />
            {/* <Login /> */}
        </div>
    )
}

export default HomePage