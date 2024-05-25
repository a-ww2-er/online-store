import cors from 'cors';
import express,{Express,Request,Response} from 'express'
import { errorHandler } from './middlewares/errors';
import rootRouter from './routes'
import { CORS_ORIGIN } from './variables';

//EXPRESS SERVER SETUP

const app: Express = express();

// SET THE APPLICATION TO TRUST THE REVERSE PROXY
app.set('trust proxy', true);

// MIDDLEWARES
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json())

// ROUTES
app.use('/api',rootRouter)
app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        message:"Server is running"
    })
})


// ERROR HANDLERS
 app.use(errorHandler);

export default app
