"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import type { Product } from "@/schemas/productSchema";
import SearchBar from "@/components/SearchBar";
import ProductTable from "@/components/ProductTable";
import Loading from "@/components/Loading";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  if (error === "Unauthorized") {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <p className="text-red-600 text-lg">
          Please sign in.
        </p>
      </main>
    );
  }

  if (error === "Forbidden") {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <p className="text-red-600 text-lg">
          You do not have permission.
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <p className="text-red-600 text-lg">
          {error}
        </p>
      </main>
    );
  }

  return (
    <main className="
      min-h-screen
      bg-gray-50
      p-4
      sm:p-6
      lg:p-8
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        <h1 className="
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          mb-4
          sm:mb-6
        ">
          Products
        </h1>


        <div className="
          bg-white
          rounded-lg
          shadow
          p-4
          sm:p-6
        ">

          <SearchBar
            value={search}
            onChange={setSearch}
          />


          <div className="
            mt-4
            overflow-x-auto
          ">

            {filteredProducts.length === 0 ? (
              <p className="
                text-center
                text-gray-500
                py-8
              ">
                No products found.
              </p>
            ) : (
              <ProductTable
                products={filteredProducts}
              />
            )}

          </div>

        </div>

      </div>

    </main>
  );
}