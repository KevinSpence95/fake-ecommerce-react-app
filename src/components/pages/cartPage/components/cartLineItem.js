import useShopContext from "../../../../customHooks/useShopContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from './cartLineItem.module.css'

export default function CartLineItem({ cartItem }) {
  const { products, updateQty, removeFromCart } = useShopContext();

  const correspondingProd = products.find((prod) => prod.id === cartItem.id);

  return (
    <article className={styles.lineItem}>
      <img src={correspondingProd.image} alt={correspondingProd.name} />
      <h4>{correspondingProd.name}</h4>
      <h4>${correspondingProd.price}</h4>
      <input
        type="number"
        step={1}
        min={0}
        value={cartItem.qty}
        onChange={(e) => {
          updateQty(cartItem.id, parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          removeFromCart(cartItem.id);
        }}
      >
        <DeleteForeverIcon style={{ fontSize: "large" }} />
      </button>
    </article>
  );
}
