import  { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const HomeProducts = ({ limit = 4 }) => {
  // get products + loading from context
  const { products, loading } = useContext(ProductContext);
  const navigate = useNavigate()

  // choose first `limit` products
  const featured = products.slice(0, limit);

  return (
    <section className="p-6 bg-secondarybg">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>

      {/* Loading */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <button className="bg-complement text-primary font-medium px-8 py-3 rounded-md shadow-md border border-complement hover:shadow-lg transition-shadow"
        onClick={(() => navigate("/products"))}
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

export default HomeProducts;
