import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getOneProduct,
  getProduct,
  updateProduct,
} from "../controllers/products";

const routerProduct = Router();
routerProduct.post("/", addProduct);
routerProduct.get("/", getProduct);
routerProduct.get("/:id", getOneProduct);
routerProduct.delete("/:id", deleteProduct);
routerProduct.put("/:id", updateProduct);

export default routerProduct;
