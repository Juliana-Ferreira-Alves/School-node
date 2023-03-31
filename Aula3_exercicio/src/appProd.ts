import express from 'express';
import cors from 'cors';
import routes from './routers';


const appProd = express();

appProd.use(cors());
appProd.use(express.json());


appProd.use(routes);

const port = 3000;

appProd.listen(port, () => {
    console .log ('Aplicação está on!', port);
});


