import { Router } from "express";
import auth from "../middleware/auth.js";
import validate from "../middleware/validate.js";
import {
  createProductSchema,
  updateProductSchema
} from "../validators/product.validator.js";

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  getStatus
} from "../controllers/product.controller.js";


const router = Router();


router.get("/", auth, getProducts);

router.get("/:id", auth, getProduct);

router.post(
  "/",
  auth,
  validate(createProductSchema),
  createProduct
);


router.put(
  "/:id",
  auth,
  validate(updateProductSchema),
  updateProduct
);


router.get(
  "/:id/status",
  auth,
  getStatus
);


export default router;