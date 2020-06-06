import express from 'express'

const ExampleRouter = express.Router()


ExampleRouter.use((req, res, next) => {
    console.log(`Example Router \n Time: ${Date.now()}`);
    next();
})


// GET  
// POST 



ExampleRouter.get('/', (req, res) => {
    console.log(`Home directory touched: ${req.body.test || "NO TEST PARM RECEIVED"}`);
})

export { ExampleRouter };