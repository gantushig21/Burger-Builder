import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules/routes';

const app = express();

middlewaresConfig(app);

app.use('/api', apiRoutes);

app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(`
            Server is running on port: ${constants.PORT}
            ---
            Running on ${process.env.NODE_ENV}
            ---
            Make something great
        `);
    }
});