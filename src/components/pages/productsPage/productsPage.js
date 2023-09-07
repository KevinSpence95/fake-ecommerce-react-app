import { useContext, useState } from "react";
import { StoreData } from "../../../context/contextProvider";
import Filters from "./components/filters";
import PageSelector from "./components/pageSelector";
import ProductsContainer from "./components/productsContainer";

export default function ProductsPage() {
  const { state } = useContext(StoreData);
  console.log(state.products);

  //states for user filters
  const [searchVal, setSearchVal] = useState("");
  const [stars, setStars] = useState(0);
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [sortByAscendingPrice, setSortByAscendingPrice] = useState(false);
  //page selector state
  const [page, setPage] = useState(1);

  //derived state from applying filters to store product list
  const filteredProducts = state.products.filter((prod) => {
    if (searchVal === "") {
      return true;
    } else {
      if (prod.name.toLowerCase().includes(searchVal.toLowerCase())) {
        return true;
      }
    }
  });

  return (
    <main className="productPageContainer">
      <Filters
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        stars={stars}
        setStars={setStars}
        includeOutOfStock={includeOutOfStock}
        setIncludeOutOfStock={setIncludeOutOfStock}
        sortByAscendingPrice={sortByAscendingPrice}
        setSortByAscendingPrice={setSortByAscendingPrice}
      />
      <ProductsContainer filteredProducts={filteredProducts} page={page} />
      <PageSelector
        numPages={Math.ceil(filteredProducts.length / 9)}
        page={page}
        setPage={setPage}
      />
    </main>
  );
}
