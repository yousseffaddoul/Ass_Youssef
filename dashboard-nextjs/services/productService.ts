import { productsSchema } from "@/schemas/productSchema";
import type { Product } from "@/schemas/productSchema";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<Product[]> {
   console.log("getProducts() called");
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined.");
  }

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5b3Vzc2VmZmFkZG91bDUyQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MzY3NjQ3OCwiZXhwIjoxNzgzNzYyODc4fQ.yfVveSS4lbs3j0F3Q0Ebs7Ry7pVedJOn042aqxejRb8";

console.log("Stored token:", token);

  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`${API_URL}/api/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log("Status:", response.status);
console.log("Headers sent token:", `Bearer ${token}`);

  if (response.status === 401) {
    throw new Error("Unauthorized");
  }

  if (response.status === 403) {
    throw new Error("Forbidden");
  }

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

 const json = await response.json();

console.log("API Response:", json);

return productsSchema.parse(json);
}