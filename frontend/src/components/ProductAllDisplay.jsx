import { ProductContext } from "../context/ProductContext";
import  { useContext } from "react";
import ProductCard from "./ProductCard";

const ProductAllDisplay = () => {
    const { products, loading } = useContext(ProductContext);
    const product = products;
  return (
    
        <section className="w-full  py-4 lg:py-14 ">
            <div className=" flex-col items-center justify-center  w-full ">
                <div className="text-center lg:my-4 mb-12 w-full px-4">
                    <h1 className="text-5xl ">Avilable Products</h1>
                </div>
                <div className=" flex-col px-8 md:flex-row w-full justify-center items-center min-h-[70vh] lg:px-8 ">
                {loading ? (
                    <p className="text-5xl text-complement text-center">LOADING</p>
                    ) : (
                            
                        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {
                                    product.map((item) => {
                                       return <ProductCard key={item.id}  product = {item} />
                                    })
                                }
                             </div>
                    )
                }
               </div>
            </div>
           
       
    </section>
  )
}

export default ProductAllDisplay
