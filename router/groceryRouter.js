const { Router } = require("express");

const router = Router();

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "orange",
    quantity: 4,
  },
  {
    item: "Routerle",
    quantity: 1,
  },
];

// Middleware ++++
// app.use(function (req, res, next) {
//   if (req.session.user) {
//     next();
//   } else {
//     res.status(500).send("Something broke!");
//   }
// });

// console.log(groceryList);

router.get(
  "/",
  // middlewware
  // function ( req, res, next) {
  // //   console.error(err.stack);
  //   console.log(`${req.method}:${req.url}`);
  // //   res.status(500).send('Something broke!')
  // next();
  // },
  function (request, response) {
    response.cookie("visited", true, {
      maxAge: 10000,
    });

  console.log(request.cookies);


    response.send(groceryList);
    console.log(groceryList);
  }
);

router.get("/:item", function (request, response) {
  // console.log(request.params);
  // { item : 'karrot' }

  // cookie original written
  // console.log(request.headers.cookie);
  // cookie-parser

  // console.log(request.cookies);

  // console.log(request.params.item);
  // karrot
  
  const { item } = request.params;
  // console.log(item);
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
  // console.log(request.body);
});

router.post("/", function (request, response) {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
});

router.get('/shopping/cart',(request,response) => {
const {cart} = request.session;
if(!cart){
  request.send("u dont have cart session")
}else {
  response.send(cart);
}
})

router.post("/shopping/cart/item", (request, response) => {

  const {item,quantity} = request.body;
  const cartItem = {item,quantity};
  console.log(cartItem);
  // console.log(request.session);
  const {cart} = request.session;
  console.log("hello");
  console.log(cart);
  // if(cart){
  //   request.session.cart.item,push(cartItem)
  // }else {
  //   request.session.cart ={
  //     item :[cartItem]
if(cart){
  request.session.cart.item.push(cartItem)
}else {
  request.session.cart = {
    item :[cartItem]
  }
}
  //   }
    
  // }

response.send(201);

});

module.exports = router;
