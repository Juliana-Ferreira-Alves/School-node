import express from 'express';
import cors from 'cors';

import router from './routers'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log('Servidor está on!', port);
});