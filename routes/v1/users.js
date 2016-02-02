import { Router } from 'express'

Router.route('/')
 .get((req, res) =>{
    res.json('response goes here')
    }, (err) => {
        res.json(err)
    });

module.exports = Router;