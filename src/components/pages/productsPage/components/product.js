export default function Product({ prod }) {
  return (
    <article className="productCard">
      {/* <img src={prod.image} alt={prod.name} /> */}
      <h4>{prod.name}</h4>
    </article>
  );
}
