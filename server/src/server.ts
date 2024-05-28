import cors from 'cors';
import express,{Express,NextFunction,Request,Response} from 'express'
import { errorMiddleware } from './middlewares/errorsMiddleware';
import rootRouter from './routes'
import { CORS_ORIGIN } from './variables';
import path from "path";
import { NotFoundException } from './exceptions/not-found';
import { ErrorCode } from './exceptions/root';

//EXPRESS SERVER SETUP

const app: Express = express();

// SET THE APPLICATION TO TRUST THE REVERSE PROXY
app.set('trust proxy', true);


// MIDDLEWARES
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json())
app.use('/public',express.static(path.join(__dirname,'public')))

// ROUTES
app.use('/api',rootRouter)
app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        message:"Server is running"
    })
})

// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
    throw new NotFoundException(`Route ${req.originalUrl} not found`,ErrorCode.ROUTE_NOT_FOUND) as any;
  });


// ERROR HANDLERS
 app.use(errorMiddleware);

export default app
