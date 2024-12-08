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
        setLoading(true); // Start loading
        const url = selectedCategory
          ? `http://localhost:8080/genres/${selectedCategory}`
          : `http://localhost:8080/bands`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data); // Tjek hvad der returneres fra API'et

        if (data && Array.isArray(data.products)) {
          setProducts(data.products); // Gem de hentede produkter
        } else {
          setProducts([]); // Hvis der ikke findes produkter, vis en tom liste
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Fejlbehandling
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>
        {selectedCategory
          ? `Products under the ${selectedCategory} genre`
          : "All Bands"}
      </h1>

      <div className="grid grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <Link href={`/pages/products/${product.id}`}>
                <h2>{product.genre}</h2>
              </Link>
              <h1>Price: {product.price}</h1>
              {product.image && (
                <div>
                  <Image
                    src={product.image}
                    alt={product.genre}
                    width={200} // Tilpas størrelsen efter behov
                    height={200} // Tilpas størrelsen efter behov
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
