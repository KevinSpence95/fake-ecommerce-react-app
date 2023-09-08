import styles from "./product.module.css";
import StarRating from "./starRating";
export default function Product({ prod }) {
  return (
    <article className={styles.productCard}>
      <img src={prod.image} alt={prod.name} />
      <h4>{prod.name}</h4>
      <p>${prod.price}</p>
      {!prod.inStock ? (
        <h5 style={{ color: "red" }}>Out of Stock</h5>
      ) : (
        <h5 style={{ color: "green" }}>In Stock</h5>
      )}
      <StarRating stars={prod.rating} size={'small'} />
      <button disabled={!prod.inStock}>Add to Cart</button>
    </article>
  );
}
