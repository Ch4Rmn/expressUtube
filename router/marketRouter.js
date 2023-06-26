const { Router } = require("express");

const router = Router();

const marektList = [
  {
    id: 1,
    store: "ocean",
    mile: 0.3,
  },

  { id: 2, store: "orange", mile: 2.5 },

  {
    id: 3,
    store: "junction city",
    mile: 2.8,
  },

  { id: 4, store: "spirit", mile: 7 },

  { id: 5, store: "cp", mile: 5 },
];

// console.log(groceryList);

router.get('',(request,response) => {
  const {mile} = request.query;
  const parseMile = parseInt(mile);

  if(parseMile){
    const filterMile = marektList.filter((m) => 
    m.mile <= parseMile)
    response.send(filterMile)
    console.log(filterMile);
    
  }else {
    response.send(marektList)
  }
 });


// router.get(
//   "",
//   // middlewware
//   // function ( req, res, next) {
//   // //   console.error(err.stack);
//   //   console.log(`${req.method}:${req.url}`);
//   // //   res.status(500).send('Something broke!')
//   // next();
//   // },
//   function (request, response) {
//     // in browser 
//     // response.send(marektList);
//     console.log(request.query);
//     const {mile} = request.query;
//     // console.log(typeof(mile));
//     // console.log(mile); string 

//     const parseMile = parseInt(mile);
//     // number
//     console.log(typeof(parseMile));
    

// // if(!isNaN(parseMile)){
// //   const filterMarket = marektList.filter((m) => {
// //     m.mile <= parseMile;
// //     response.send(filterMarket);
// //   })
// // } else {
// //   response.send(marektList);

// // }
//     // console.log(request.params);
//     // console.log(marektList);
//   }
// );

// // router.get("/:store", function marketRouter(request, response) {
// //   // console.log(request.params);
// //   // { item : 'karrot' }

// //   // console.log(request.params.item);
// //   // karrot

// //   const { store } = request.params;
// //   // console.log(item);
// //   const marketItem = marektList.find((g) => g.store === store);
// //   response.send(marketItem);
// //   // console.log(request.body);
// // });

// // router.post("/", function (request, response) {
// //   console.log(request.body);
// //   marektList.push(request.body);
// //   response.send(201);
// // });

module.exports = router;
