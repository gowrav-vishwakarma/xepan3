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
  // user.mobilenumber=req.body.mobilenumber
  // user.verification.mobile.code= Math.floor(1000 + Math.random()*9000);
 user.verification.email.code =  Math.floor(1000 + Math.random() * 9000);

  await user.save()
  res.json({message:'User Saved, please start verification now'})
})
router.post('/registermobile',async(req,res)=>{
const mobileuser = User();
mobileuser.mobilenumber=req.body.mobilenumber
mobileuser.verification.mobile.code=Math.floor(1000 + Math.random() * 9000);
await mobileuser.save()
res.json({message:"User Saved pleas Start Verification Now"})
})
router.post('/verifyotp',async(req,res)=>{

  const results =await User.findOne({mobilenumber:req.body.mobilenumber})
if(results && results.verification.mobile.code === req.body.otp){
  res.json({message:'ok'})
}
else
{
  res.status(500).json({error:"Not found"})
  
}
})
router.post('/verifycode',async(req,res)=>{
console.log('req.body................',req.body.useremail)
// const result =await User.findOne({verification:{email:{code:req.body.verifycode}}})
const result =await User.findOne({username:req.body.useremail})

if(result && result.verification.email.code === req.body.verifycode){
  res.json({message:'ok'})
}else{
  res.status(500).json({error:"Not found"})
}


// return result
//   function(err,result){
//   console.log("hi",req.body.verifycode)


//   if(result){

   
//     res.status("Success").send(result)
// // res.send(result);

//   }
//   else{
//     res.status("Success").send(err)
    
    
//   }
})


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

