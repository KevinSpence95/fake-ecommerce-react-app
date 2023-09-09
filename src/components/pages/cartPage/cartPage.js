import useShopContext from "../../../customHooks/useShopContext";
import CartLineItem from "./components/cartLineItem";
import styles from './cartPage.module.css'

export default function CartPage() {
  const { cart, totalPrice, totalItems } = useShopContext();

  if (totalItems < 1) {
    return (
      <div className={styles.cartSummary}>
        <h1>Cart Empty - Add items to proceed</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.cartSummary}>
        <h2>Cart Summary</h2>
        <section className={styles.lineItems}>
          {cart.map((item, i) => {
            return <CartLineItem key={i} cartItem={item} />;
          })}
        </section>
        <h2>Subtotal : ${totalPrice}</h2>
        <button>Proceed to checkout</button>
      </div>
    );
  }
}
