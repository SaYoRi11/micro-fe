import React from "react";
import ReactDOM from "react-dom";
import Header from 'home/Header'
import Footer from 'home/Footer'
import ProductsContent from "./ProductsContent";
import { BrowserRouter } from 'react-router-dom'

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto">
      <Header />
      <ProductsContent />
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
