import React from "react";
import './app.css'
import Home from './pages/Home/Home'
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductInfo from "./pages/ProductInfo/ProductInfo";

export default function App(){
    return (
        <div className="container">
           <ProductsList />
        </div>
    )
}