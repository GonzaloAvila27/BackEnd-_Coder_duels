import { PORT } from './config';
import server from './services/server'

server.listen(PORT, ():void =>{
    console.log(`Server up : ${PORT}`);
    
})