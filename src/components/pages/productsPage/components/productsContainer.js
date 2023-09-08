import Product from "./product";

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
    <section className="productContainer">
      {displayedProducts.map((prod) => {
        return <Product key={prod.id} prod={prod} />;
      })}
    </section>
  );
}
