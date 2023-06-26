const { Router } = require("express");

const router = Router();

router.post('/login',function(request,response){
    const {username,password} = request.body;
    // const userData = {username,password};
    // console.log(userData);

    if(username && password){
        if(request.session.user){
            response.send(request.session.user)
        }else {
          request.session.user = {
            username,
          };
          console.log(request.session);
          //   Session {
          //   cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
          //   user: { username: 'linhtutkyaw' }
          // }
          console.log(request.session.user);

          //   { username: 'linhtutkyaw' }

          response.send(request.session);
        }
       
    }
    
    
    else {
         response.send(401);
    }

    
})

module.exports=router;