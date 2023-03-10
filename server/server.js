import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app =express();

/**middleware */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');//less hackers know about our stack


const port = 8081;

/**Http GET request */
app.get('/',(req,res)=>{
    res.status(201).json("home Het request");
})

/**start the sever */
app.listen(port,()=>{
    console.log(`server connected to http://localhost:${port}`);
})


