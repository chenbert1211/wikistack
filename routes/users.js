const express = require("express");
const userRouter = express.Router();
const index = require("../views/index")

userRouter.get('/', (req, res) => {
    res.redirect('/wiki')
})

userRouter.get('/123', (req, res) => {
    res.send(index.main())
})

userRouter.post('/', (req, res) =>{
    
})

userRouter.put('/123', (req, res) => {
    res.send(index.main())
})

userRouter.delete('/123', (req, res) => {
    res.send(index.main())
})



module.exports = userRouter;