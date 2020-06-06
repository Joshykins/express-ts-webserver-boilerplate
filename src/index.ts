import express from 'express';
import { PORT } from './config/server-constants';
import { ExampleRouter } from './endpoints/ExampleEndpoint';

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/', ExampleRouter);

//Listening
app.listen(PORT, () => {
    console.log(`Server is running :) \n ON PORT: ${PORT}`);
})