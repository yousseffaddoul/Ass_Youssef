import { products } from "../data/products.js";
import { Product } from "../models/product.model.js";

export function getProducts() {
  return products;
}


export function getProductById(id) {
  return products.find(
    product => product.id === Number(id)
  );
}


export function createProduct(data) {

  const product = new Product(
    products.length + 1,
    data.name,
    data.price,
    "available"
  );

  products.push(product);

  return product;
}


export function updateProduct(id, data) {

  const product = products.find(
    p => p.id === Number(id)
  );

  if (!product) {
    throw new Error("Product not found");
  }

  product.name = data.name;
  product.price = data.price;

  return product;
}


export function getProductStatus(id) {

  const product = products.find(
    p => p.id === Number(id)
  );

  if (!product) {
    throw new Error("Product not found");
  }

  return {
    id: product.id,
    status: product.status
  };
}