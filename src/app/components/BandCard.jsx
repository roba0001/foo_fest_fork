/*import testImg from '../../images/band.jpg'

export default function BandCard()
{
    return (
        <article className="overflow-hidden relative h-[350px] w-[250px] border-2 border-green group">
            {/* Image Wrapper */ /*}
            <div className="h-full">
                <Image
                    src={testImg}
                    alt="band image"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Header */ /*}
            <header className="absolute bottom-2 left-[50%] translate-x-[-50%] text-white text-center">
                <h3 className="whitespace-nowrap">
                    Band Name
                </h3>
            </header>

            {/* Band Description */ /*}
            <div className="band-desc-container w-full bg-white absolute top-full min-h-full transition-all duration-500 ease-in group-hover:top-0 p-4 h-fit">
                <h5 className="text-lg font-semibold">
                    Viking
                </h5>
                <div className="container band-desc-text-container overflow-auto scroll-hide">
                    <p className="text-sm text-gray-700 mt-2 h-[250px]">
                       
                </div>
            </div>
        </article>
    );
}
*/

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Category from "@/app/components/Category";

export default function Ban() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("http://localhost:8080/bands");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      if (selectedCategory) {
        try {
          const response = await fetch(
            `http://localhost:8080/bands/${selectedCategory}`
          );
          const data = await response.json();
          console.log("Fetched data:", data);

          if (data && Array.isArray(data.products)) {
            setProducts(data.products);
          } else {
            setProducts([]);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          setProducts([]);
        }
      }
    }
    fetchProducts();
  }, [selectedCategory]);

  const categoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
  };

  return (
    <div className="bg-card">
      <form>
        <label htmlFor="categories">Categories: </label>
        <select
          className="bg-background"
          name="categories"
          id="categories"
          onChange={categoryChange}
          value={selectedCategory}
        >
          <option value="">All products</option>
          {categories.map((category) => (
            <option key={category.name} value={category.genre}>
              {" "}
              {/* Add key prop */}
              {category.genre}
            </option>
          ))}
        </select>
      </form>

      <Category selectedCategory={selectedCategory} />
    </div>
  );
}
