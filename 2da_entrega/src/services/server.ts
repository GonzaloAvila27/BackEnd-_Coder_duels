import express,{Request,Response, NextFunction} from 'express';
import mainRouter from '../routes';
import { Error } from '../utilities/globals';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', mainRouter)

app.use((req, res, next) => {
    res.status(404).json({
        msg:'Page not found'
    })
})

interface Error {
    status?: number,
    message?: string
}

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        message,
    })
});


export default app