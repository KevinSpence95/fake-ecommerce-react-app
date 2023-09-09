import useShopContext from "../../../customHooks/useShopContext";

export default function CartPage() {
  const { cart } = useShopContext();
  return (
    <div>
      {cart.map((item,i) => {
        return (
          <p key={i}>
            {item.id} | {item.qty}
          </p>
        );
      })}
    </div>
  );
}
