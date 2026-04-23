// const express= require('express')
// const users=require('./MOCK_DATA.json')


// const app= express()
// const port=8000

// routes

// app.get('/users',(req,res)=>{
//     const html= `
//     <ul>
//     ${users.map((user)=>`<li>${user.first_name}</li>`).join()}
//     </ul
//     `
//     return res.send(html);
// })

// restapi

// app.get('/api/users',(req,res)=>{
//     return res.json(users)
// })



// app.get('/api/users/:id',(req,res)=>{
//     const id= Number (req.params.id)
//     const user = users.find((user)=>user.id===id)
//     return res.json(user)
// })



// sab app.route me add kardi alag patch,delete ko 📨🤶

// app.patch('/api/users/:id',(req,res)=>{
//     // Edit user from id
//     return res.send({status:'pending'})
// })


// app.delete('/api/users/:id',(req,res)=>{
//     // Delete user from id
//     return res.send({status:'pending'})
// })

// add all in one on single route 🤶📨💖

// app.use(express.urlencoded({extended:false}))

// const fs=require('fs')

// app.route('/api/users/:id').get((req,res)=>{
//      const id= Number (req.params.id)
//     const user = users.find((user)=>user.id===id)
//     return res.json(user)
// })
// .patch((req,res)=>{ // edit user from id 
//     return res.json({status:'pending'})
// })
// .delete((req,res)=>{ // delete user from id 
//     return res.json({status:'pending'})
// })

// // alag se post request 🤷‍♀️

// // postman me data add kiya 🐱‍👤🤦‍♀️

// app.post('/api/users/',(req,res)=>{
//     // create new user 
//     const body=req.body;
//    users.push({...body,id:users.length+1})
//    fs.writeFile('./MOCK_DATA.JSON',JSON.stringify(users),(err,data)=>{
//     return res.json({status:'Successful',id:users.length+1})
//    })
    
// })

// app.listen(port,()=>console.log(`my server started ${port}`))

// Middleware  🀄🧲

import express from 'express'
// const users=require('./MOCK_DATA.json')
import home from './pages/home.js'
import login from './pages/login.js'
import submit from './pages/submit.js'

const app= express()
const port=8000;

//application middleware 😊

// app.use((req,res,next)=>{
//     console.log(`[${new Date().toDateString()}] ${req.method} ${req.url}`); 
//     next(); 
// });

// app.use('admin',(req,res,next)=>{
//     console.log('admin credential');
//     next()
// })

// // admin personel middleware🎶

// app.get('/admin',(req,res)=>{
//     res.send('HI ADMIN!')
// });

// app.get('/',(req,res)=>{
//     res.send('hello from home ')
// });

// app.get('/about',(req,res)=>{
//     res.send('hello from about ')
// });

// app.listen(port,()=>{
//     console.log(`server is running on http://localhost:${port}`);
    
// }) 

// login form submission 🙌
 
// app.get('/',(req,res)=>{
//     res.send(home())
// })
// method post use kiya then hume post use karna padega submit me 
// if hum method use ni karte to get se bhi kaam ho jata
// app.get('/login',(req,res)=>{
//     res.send(login())
// })

// app.post('/submit',(req,res)=>{
//     res.send(submit())
// })

// app.listen(port,()=>{
//     console.log('server running on port');
    
// })

// external middleware 🐱‍👤🤳 

//  import cors from 'cors';
//  import morgan from "morgan";
//  import rateLimit from 'express-rate-limit'

//  app.use(morgan('dev')) // kaun enter kar raha h
//  app.use(cors()) // kaun enter kar sakta h

//  const limiter=rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
// 	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
// 	message:'Many request from ip address try 15 min later',
//     standardHeaders: true, // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
// 	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
// 	// store: ... , // Redis, Memcached, etc. See below.
// })

// app.use('/',limiter)

//  app.get('/',(req,res)=>{
//     res.send('Hello third party middleware')
//  });

//  app.get('/api/data',(req,res)=>{
//     res.json({msg:'sample api responce'})
//  });

//  app.listen(port,()=>{
//     console.log(`server running port ${port}`);   
// })

// ejs practice  views 🦹‍♀️🦹‍♀️

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index',{title:'satyam', content:'rendering from node'});
// });

// app.listen(port, () => {
//   console.log(`server running on ${port}`);
// });

// mvc architecture 

// Dynamic routes and  ejs conditions - views/user.ejs ❤🎉🎉

// app.set('view engine', 'ejs');

// // dummy data
// const users=[{name:'SATYAM',id:1,role:'admin'},
//   {name:'yuvraj',id:2,role:'editor'},
//   {name:'sures',id:3,role:'viewer'}
// ]

// // Dynamic routes 
// app.get('/users/:id',(req,res)=>{
//   const {id} =req.params
//   const user=users.find(u=>u.id===parseInt(id))
//   if(user){
//     res.render('user',{user})
//   } else{
//     res.status(404).send('user not found')
//   }
// })

// app.listen(port,()=>{
//   console.log(`server running on ${port}`);
// })

// API integration  views /posts.ejs 🤷‍♂️

import fetch from 'node-fetch'

app.set('view engine', 'ejs');

app.get('/posts', async (req,res)=>{
   try{ 
       const response=await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts= await response.json()
       console.log(posts);
       res.render('posts',{posts})
   }
   catch(error)
   { 
      res.status(500).send('error fetching post')
   }
})
app.listen(port,()=>{
  console.log('api coming for server ',port);

})
