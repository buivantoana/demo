import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  updatePut,
  updatePatch,
} from "../controllers/product.js";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.patch("/products/:id", updatePatch);
// router.put("/products/:id", updatePut);
router.delete("/products/:id", remove);

export default router;