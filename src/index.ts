import express from 'express';
import { EnvVariables } from './config/config.server';
import { DataBase } from './data/connection/data.connect';
import { UnknownRouter } from './routes/route.404';
import { ExampleRouter } from './routes/route.example';
import { Log, LogLevels } from './util/logger';

const app = express();


const InitServer = async () => {

    //DB Connection
    //------------------------
    let dbSucceeded = true;
    try {
        dbSucceeded = await DataBase();
    }
    catch(err) {
        dbSucceeded = false;
        Log(err, LogLevels.ERROR);
    }
    if(!dbSucceeded) {
        Log("Stopping due to database connection issue", LogLevels.ERROR);
        return;
    }


    //Middlewares
    //---------------------
    //JSON Parsing Middleware
    app.use(express.json());

    //CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //Routes
    //-------------------------------------
    
    // Info only Router to display when req made to server
    app.use((req, res, next) => {
        let date = Date.now();
        Log( `${new Date(date).toLocaleTimeString()} : ${new Date(date).toDateString()} | ${req.method} request made to ${req.url}`, LogLevels.INFO);
        next();
    })
    
    //Example Router
    app.use("/" /*Base Route*/, ExampleRouter /*Router*/);
    app.use("/test/test/test" /*Base Route*/, ExampleRouter /*Router*/);

    //404 Route
    app.use('/*', UnknownRouter);

    //Listening For Requests 
    app.listen(EnvVariables.PORT, () => {
        console.log(`Server is running :) \n ON PORT: ${EnvVariables.PORT}`);
    })
};

InitServer();