import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Desk</Link>
        </li>
        <li>
          <Link to="/products/p3">A Lamp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
