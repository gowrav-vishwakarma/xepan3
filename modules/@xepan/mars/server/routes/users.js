const express = require('express')
const router = express.Router()
const { User } = require('../models');

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/registration',async (req,res)=>{
  console.log('registering');
  const user =User();

  user.username=req.body.useremail
  user.password=req.body.userpassword
 user.verification.email.code = "1234";

  await user.save()
  res.json({message:'User Saved, please start verification now'})
})
router.post('/verifycode',async(req,res)=>{
console.log('verify code')
const verify = User();
await verify.findone({emailcode:"1234"},function(err,result){
  if(err){
res.send(err);
  }
  else{
    res.send(result);
    
  }
})
},

module.exports = router
//  const result= await verify.findone({useremail:req.body.useremail,emailcode:"1234"}
//   
//   console.log("This is Rahul",result)

//  if(result){
//    result.verification.email.verified = true;
//    await result.save()
//    res.send({'message':'done'});
//  }else{
//    res.status(401).send({message:'Verification Code not matched'});
//  }
// })

)