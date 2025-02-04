import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    console.info("call empty array");
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/product.json");
      const data = await response.json();
      setProduct(data);
      // fetch("/product.json")
      //   .then((res) => res.json())
      //   .then((data) => setProduct(data));
    }
    if (load) {
      fetchProduct();
    }
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load</button>
      {product.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </>
  );
}
