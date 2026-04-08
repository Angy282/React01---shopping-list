import React from "react";
import { products } from "../data/Products";
import ProductCard from "./ProductCard";
import { card } from "../styles/global";

const ProductList = () => {
  return (
    <section className="px-30">
      <h2>Product List</h2>
      <div className={card.cardsWrapper}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
