import { Router } from 'express'
import fs from 'fs'
//import models from '../models'

let v1Routes = fs.readdirSync(__dirname + '/v1');


module.exports = (app) => {

    /**
     * V1 Routes
     */
    v1Routes.forEach((route) => {
        let routeName = route.split('.')[0];
        app.use('/api/v1/' + routeName, require('./v1/' + route));
    });

    return router;
};