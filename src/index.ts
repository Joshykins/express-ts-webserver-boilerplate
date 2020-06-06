/*

TODO LIST:
->Proper hotloader
->Docker Setup
X ->ESLint
X ->Start Webserver
X ->Controllers/Routes/Endpoints
 ->need to integrate DTOS
->Services
->Models
 ->DTO  (request/response objects)
 ->DBTO (database objects)
 (DB CONNECTION)
->ORM (probably typeORM)
->DI/Testing/Hydration (no idea yet)
->Logging (logging levels, ERROR, WARN, INFO, DEBUG ) [an enum?]
->OpenAPI (maybe, haven't looked into feasibility)

*/
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