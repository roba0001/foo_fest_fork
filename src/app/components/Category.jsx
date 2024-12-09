"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Category({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const url = selectedCategory
          ? `http://localhost:8080/genre/${selectedCategory}`
          : `http://localhost:8080/bands`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Fetched products:", data);

        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={`/pages/products/${product.id}`}>
              <h2>{product.genre}</h2>
            </Link>
            <h1>Price: {product.price}</h1>

            <div className="image-container">
              <Image
                src={product.image || "/fallback.jpg"} // Fallback image
                alt={product.genre || "Default image"}
                width={200}
                height={200}
                onError={(e) => (e.target.src = "/fallback.jpg")} // Display fallback image
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
