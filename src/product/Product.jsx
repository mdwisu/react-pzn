export default function Product({ product }) {
  return (
    <div>
      <h2>
        {product.id} : {product.name}
      </h2>
      <p>Rp. {product.price}</p>
    </div>
  );
}
