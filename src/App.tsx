import ProductCard from "./components/ProductCard";
import "./App.css";
import { productList } from "./data";

function App() {
  const runderList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <>
      <main className="container mx-auto ">
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md  md:gap-4">
          {runderList}
        </div>
      </main>
    </>
  );
}

export default App;
