import React, { useEffect } from "react";
import { setProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { mockData } from "../assets/mockData";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/slices/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  console.log(products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  const handleAddToCart = (e, product) => {
     e.stopPropagation()
     e.preventDefault()
     dispatch(addToCart(product))
     alert(`Added ${product.name} to cart!`)
  }
  return (
    <div className=" mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
        {products.products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm font-semibold">{product.description}</p>
            <p className="text-gray-500">${product.price}</p>
            {product.discount > 0 && (
              <p className="text-red-500">Discount: {product.discount}%</p>
            )}
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <div className="flex items-center justify-center space-x-10 text-sm font-bold mt-4">
            <button className="bg-[#7FA1C3] text-black hover:bg-[#4384c5] px-4 py-2 mt-2">Buy Now</button>
            <button className="bg-[#7FA1C3] text-black hover:bg-[#4384c5] px-4 py-2 mt-2" onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
