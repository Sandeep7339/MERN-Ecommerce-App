import express from "express";
const router = express.Router();
import {
  categoryController,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import { requireSignIn, isAdmin } from "../middlewares/authmiddleware.js";
//routes
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);
//getALl category
router.get("/get-category", categoryController);
//single category
router.get("/single-category/:slug", singleCategoryController);
//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
