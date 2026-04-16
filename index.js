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

// login form submission
 
app.get('/',(req,res)=>{
    res.send(home())
})
// method post use kiya then hume post use karna padega submit me 
// if hum method use ni karte to get se bhi kaam ho jata
app.get('/login',(req,res)=>{
    res.send(login())
})

app.post('/submit',(req,res)=>{
    res.send(submit())
})

app.listen(port,()=>{
    console.log('server running on port');
    
})
