import { useContext } from "react";
import { StoreData } from "../../../context/contextProvider";
import Filters from "./components/filters";
import PageSelector from "./components/pageSelector";
import ProductsContainer from "./components/productsContainer";

export default function ProductsPage() {
  const { state } = useContext(StoreData);
  console.log(state.products);

//   const [searchVal, setSearchVal] = useState("");
//   const [stars, setStars] = useState(0);

  return (
    <main className="productPageContainer">
      <Filters />
      <ProductsContainer />
      <PageSelector />
    </main>
  );
}
