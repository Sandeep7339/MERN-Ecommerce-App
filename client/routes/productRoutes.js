import express from "express";
import {
  createProductController,
  getProductController,
  deleteProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
  productListController,
  productCountController,
  productFiltersController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import formidable from "express-formidable";// parsing form data jisse image upload ho sake

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),//formidalbe means form data ko parse krega
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);
//payments routes
//token
router.get("/braintree/token", braintreeTokenController);//token to verify our account

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;