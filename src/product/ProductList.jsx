import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current === false) {
      fetch("/product.json")
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .then(() => (loaded.current = true))
        .catch((err) => console.log(err));
    }

    return () => {
      // dijalankan saat useEffect selanjutnya dijalankan
      console.info("product list component unmounted")
    }
  });

  
  
  return (
    <>
      <h1>Product List</h1>
      {product.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </>
  );
}
