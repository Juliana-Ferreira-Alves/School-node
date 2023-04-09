import express from 'express';
import cors from 'cors';
import routes from './routers';
import connection from './config/database';

const appProd = express();

appProd.use(cors());
appProd.use(express.json());


appProd.use(routes);

const port = 3000;

connection.then(() => {
    console.log('Banco de dados Conectado!');
    appProd.listen(port, () => {
        console .log ('Aplicação está on!', port);
    });
}).catch((err) => console.log(err));




