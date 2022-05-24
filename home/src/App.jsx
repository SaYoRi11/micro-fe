import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import ProductsContent from "products/ProductsContent";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto">
      <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/products" element={<ProductsContent />} />
        </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
