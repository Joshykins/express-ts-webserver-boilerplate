import express from 'express'

const UnknownRouter = express.Router()

UnknownRouter.all("",(req, res) => {
    res.statusCode = 404;
    res.send("404 | Route Not Found :'( ");
})

export { UnknownRouter };