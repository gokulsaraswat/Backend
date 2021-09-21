# Planing the project 

## Public routers
GET ALL PRODUCTS - /api/products GET
GET A SINGLE PRODUCT - /api/products GET  

PAGING -/api/products&page1  	-NUMBER =12
LOGIN - /api/login - POST - <token>
SIGNUP - /api/signup - POST
GET A SPICIFIC CATEGORY - /api/products/category/:categoryID - GET
OAUTH - /api/login/oauth/

## Private routers
//NORMAL USER(BUYER)
UPDATE A USER - /api/users/users/:userID  PUT
VIEW MYSELF - /api/users/:userID - GET

//SELLER
ADD A PRODUCT - /api/products/add - POST
UPDATE A PRODUCT - /api/products/:productID/update/:userID - PUT
DELETE A PRODUCT - /api/products/:productID/delete/:userID - PUT

//BOTH
ADD TO CART - /api/user/:userid/cart -POST
GET CART - /api/user/:userid/cart - GET
UPDATE CART - /api/user/:userid/cart - PUT
ORDER - /api/users/:userID/order -POST [cart will be empty] - EMAIL(node mailer)
GET ALL ORDERS - /api/users/:userID/order - GET
GET A SPECIFIC ORDER  - /api/users/:userID/order/:order - GET
CHECKOUT(PAYMENT GATEWAY) - /api/users/:userID/order/payment
SUCCESS - /api/payment/sucess
FAILURE - /api/payment/fail


TOKEN GENERATE = "Secret key"