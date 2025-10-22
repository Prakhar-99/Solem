import { ProductContext } from "../context/ProductContext";
import  { useContext,useState } from "react";
import ProductCard from "./ProductCard";






const ProductAllDisplay = () => {
    const { products, loading } = useContext(ProductContext);
    const product = products;
 
    // section for creating paggination variables
const LoadingSize = 9;
 const [totalcurent, settotalcurent] = useState(LoadingSize);
 const totalProduct = product.length;
// check whether the more products is avilable or Not
 const HasMore = totalcurent > totalProduct ;
 const HasLess = totalcurent > LoadingSize;
//  upadate the size of loading products 
 function productMore(){
       settotalcurent(prev => prev + LoadingSize)
} 
  function productLess (){
    settotalcurent (prev=> prev - LoadingSize)
  }




  return (
    
        <section className="w-full  py-4 lg:py-14 ">
            <div className=" flex-col items-center justify-center  w-full ">
                <div className="text-center lg:my-4 mb-12 w-full px-4">
                    <h1 className="text-5xl ">Avilable Products</h1>
                </div>
             <div className=" flex-col px-8 md:flex-row w-full justify-center items-center lg:px-8 ">
                {loading ? (
                    <p className="text-5xl text-complement text-center">LOADING</p>
                    ) : (
                            
                        <div className="  grid grid-cols-1 md:grid-cols-3  gap-6">
                                {
                                    product.slice(0,totalcurent).map((item) => {
                                       return <ProductCard key={item.id}  product = {item} />
                                    })
                                }
                             </div>
                    )
                }
               </div>
                <div className="text-center mt-8 flex gap-8 justify-center items-center">
           
        {!HasMore ? (
            <button onClick={()=> {
                productMore()
            }}
            className="bg-complement text-primary font-medium px-8 py-3 rounded-md shadow-md border border-complement hover:shadow-lg hover:bg-secondarybg hover:text-complement  transition-shadow cursor-pointer"
            >show more</button>
        ) : (
            ""
        )}

 {HasLess ? (
            <button onClick={()=> {
                productLess()
            }}
            className="bg-primary text-complement font-medium px-8 py-3 rounded-md shadow-md border border-complement hover:shadow-lg transition-shadow cursor-pointer"
            >show Less</button>
        ) : (
            ""
        )}

      </div>
            </div>
           
       
    </section>
  )
}

export default ProductAllDisplay
