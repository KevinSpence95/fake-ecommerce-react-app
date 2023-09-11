import styles from "./product.module.css";
import StarRating from "./starRating";
import { useState } from "react";
import useShopContext from "../../../../customHooks/useShopContext";

export default function Product({ prod }) {
  const { addToCart } = useShopContext();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article className={styles.productCard}>
      <img src={prod.image} alt={prod.name} />
      <h4
        onClick={() => {
          setModalOpen(true);
        }}
        className={styles.productName}
      >
        {prod.name}
      </h4>
      <p>${prod.price}</p>
      {!prod.inStock ? (
        <h5 style={{ color: "red" }}>Out of Stock</h5>
      ) : (
        <h5 style={{ color: "green" }}>In Stock</h5>
      )}
      <StarRating stars={prod.rating} size={"small"} />
      {/* NOTE: if a product's inStock property is false, no updates should be made to the cart. disabled = true will prevent our dispatch callback from firing */}
      <button
        disabled={!prod.inStock}
        onClick={() => {
          addToCart(prod.id);
        }}
      >
        Add to Cart
      </button>

      {modalOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={(e) => {
            if (e.target.classList.contains(styles.modalBackdrop)) {
              setModalOpen(false);
            }
          }}
        >
          <div className={styles.modal}>
            <img src={prod.image} alt={prod.name} />
            <h1>{prod.name}</h1>
            <StarRating stars={prod.rating} size={"large"} />
            <p>{prod.description}</p>
            <br />
            <button
              disabled={!prod.inStock}
              onClick={() => {
                addToCart(prod.id);
              }}
            >
              Add to Cart
            </button>
            <input type="button" value="X" title="close modal" onClick={()=>{setModalOpen(false)}}/>
          </div>
        </div>
      )}
    </article>
  );
}
