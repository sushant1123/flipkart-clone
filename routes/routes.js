import { userSignUp, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import {
  addPaymentGateway,
  paymentResponse,
} from "../controller/payment-controller.js";

import express from "express";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);
router.post("/payment", addPaymentGateway); //controller
router.post("/callback", paymentResponse); //payment callback

export default router;
