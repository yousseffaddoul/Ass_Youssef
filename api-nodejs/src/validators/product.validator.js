import { z } from "zod";


export const createProductSchema =
z.object({
  name:z.string().min(2),
  price:z.number().positive()
});


export const updateProductSchema =
z.object({
  name:z.string().min(2),
  price:z.number().positive()
});