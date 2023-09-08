import { useContext, useState } from "react";
import { StoreData } from "../../../context/contextProvider";
import Filters from "./components/filters";
import PageSelector from "./components/pageSelector";
import ProductsContainer from "./components/productsContainer";
import styles from "./productPage.module.css";

export default function ProductsPage() {
  const { state } = useContext(StoreData);

  //states for user filters
  const [searchVal, setSearchVal] = useState("");
  const [stars, setStars] = useState(0);
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [sortByAscendingPrice, setSortByAscendingPrice] = useState(false);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  //page selector state
  const [page, setPage] = useState(1);

  //derived state from applying filters to store product list
  let filteredProducts = state.products
    .filter((prod) => {
      if (searchVal === "") {
        return true; //keep all products if searchVal is empty
      } else {
        if (prod.name.toLowerCase().includes(searchVal.toLowerCase())) {
          return true; //if there is a search value, only keep products that include the searchVal
        }
      }
    })
    .filter((prod) => {
      if (stars === 0) {
        return true; //keep all products if star filter is set to 0
      } else {
        console.log(`stars:${stars} | prod rating:${prod.rating}`);
        return prod.rating === stars; //if the product rating matches the non-zero star rating keep it
      }
    })
    .filter((prod) => {
      if (includeOutOfStock) {
        return true; //keep all products if includeOutOfStock is true
      } else {
        return prod.inStock; //keep only the products that are in stock if includeOutOfStock is false
      }
    });

  //sort the remaining products if sortByAscending is true
  if (sortByAscendingPrice) {
    filteredProducts.sort((a, b) => {
      return a.price - b.price;
    });
  }

  //   console.log(filteredProducts);

  return (
    <main className={styles.productPageContainer}>
      <section className={styles.filtersAndProducts}>
        <Filters
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          stars={stars}
          setStars={setStars}
          includeOutOfStock={includeOutOfStock}
          setIncludeOutOfStock={setIncludeOutOfStock}
          sortByAscendingPrice={sortByAscendingPrice}
          setSortByAscendingPrice={setSortByAscendingPrice}
          resultsPerPage={resultsPerPage}
          setResultsPerPage={setResultsPerPage}
        />
        <ProductsContainer
          filteredProducts={filteredProducts}
          page={page}
          resultsPerPage={resultsPerPage}
        />
      </section>
      <section className={styles.pageSelector}>
        <PageSelector
          numPages={Math.ceil(filteredProducts.length / resultsPerPage)}
          page={page}
          setPage={setPage}
        />
      </section>
    </main>
  );
}
