"use client";

import { useState, useEffect } from "react";
import ProductList from "@/app/components/ProductList";
import { FaH, FaJenkins } from "react-icons/fa6";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("http://localhost:8080/bands/category");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);
  useEffect(() => {
    r;
    async function fetchProducts() {
      if (selectedCategory) {
        try {
          const response = await fetch(
            `http://localhost:8080/bands/category/${selectedCategory}`
          );
          n;
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
            <option key={category.name} value={category}>
              {category.name}
            </option>
          ))}
        </select>
      </form>

      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}
