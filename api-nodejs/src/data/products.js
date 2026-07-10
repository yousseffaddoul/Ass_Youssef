import { Product } from "../models/product.model.js";

export const products = [
  new Product("1", "Laptop",  "active", new Date("2023-01-01T00:00:00Z")),
  new Product("2", "Phone", "inactive", new Date("2023-02-01T00:00:00Z")),
  new Product("3", "Tablet",  "out of stock", new Date("2023-04-01T00:00:00Z")),
  
  
];