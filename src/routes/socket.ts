// import { Request, Response, NextFunction, Router } from 'express';
import express from 'express';
import { SocketController } from '../controllers/socketControlller';

class SocketRouter{
    public router: express.Router;
    socketController = new SocketController();
    constructor(){
        this.router = express.Router();
        this.routes();
    }

    routes(){
        try {
             this.router.get('/',this.socketController.test);
         } catch (error) {
            if (error) throw error;
        }
        
    }

}

const socketRouter = new SocketRouter();
export default socketRouter.router;