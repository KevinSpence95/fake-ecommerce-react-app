import Product from "./product";
import styles from './productContainer.module.css'

export default function ProductsContainer({
  filteredProducts,
  page,
  resultsPerPage,
}) {
  let displayedProducts = filteredProducts.slice(
    page * resultsPerPage - resultsPerPage,
    page * resultsPerPage
  );
  return (
    <section className={styles.productContainer}>
      {displayedProducts.map((prod) => {
        return <Product key={prod.id} prod={prod} />;
      })}
    </section>
  );
}
