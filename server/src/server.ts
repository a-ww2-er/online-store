import cors from 'cors';
import express,{Express,Request,Response} from 'express'
import rootRouter from './routes'


const app: Express = express();

// Set the application to trust the reverse proxy
app.set('trust proxy', true);

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json)

// Routes

app.use('/api',rootRouter)

app.get("/",(req:Request,res:Response)=>{
    res.send('working')
})


// Error handlers
//app.use(errorHandler());

export { app };
