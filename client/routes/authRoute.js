import express from 'express'
import {registerController,loginController,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js'
import {requireSignIn,isAdmin} from  '../middlewares/authmiddleware.js'
//router obeject
const router=express.Router()

//register || method post
router.post('/register',registerController)


//login ||post request
router.post('/login',loginController)

//forgot password
router.post('/forgot-password',forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user route
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

//protected admin route
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
//update profile
router.put("/profile", requireSignIn, updateProfileController);
//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;

