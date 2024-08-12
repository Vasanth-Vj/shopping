import headphone from "../assets/images/headphone.jpeg";
import smartwatch from "../assets/images/smartwatch.jpeg";
import runningshoes from "../assets/images/runningshoes.jpeg";
import laptop from "../assets/images/laptop.jpeg";
import coffeemaker from "../assets/images/coffeemaker.jpeg";
import camera from "../assets/images/camera.jpeg";

export const mockData = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise-cancellation.",
    price: 99.99,
    image: headphone,
    discount: 10,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Latest smart watch with multiple health tracking features.",
    price: 199.99,
    image: smartwatch,
    discount: 15,
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and durable running shoes for all terrains.",
    price: 79.99,
    image: runningshoes,
    category: "Footwear",
    discount: 5,
  },
  {
    id: 4,
    name: "Laptop",
    description: "High-performance laptop for gaming and productivity.",
    price: 1299.99,
    image: laptop,
    category: "Electronics",
    discount: 20,
  },
  {
    id: 5,
    name: "Coffee Maker",
    description: "Automatic coffee maker with multiple brewing options.",
    price: 49.99,
    image: coffeemaker,
    discount: 10,
  },
  {
    id: 6,
    name: "Digital Camera",
    description: "High-resolution digital camera with 4K video recording.",
    price: 599.99,
    image: camera,
    discount: 10,
  },
];
