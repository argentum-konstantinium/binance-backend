import Staking from "./api/Staking";
import express from 'express';
import {IApi} from "./types/api";
import buildRouter from '@src/utils/router/buildRouter';

const expressConfig = require('@root/config/express.json');
const routes = require('@src/router/index');

const app = express();
const api: IApi = {
    staking: new Staking(),
}

// @ts-ignore
global.api = api;

buildRouter(app, routes);

app.listen(expressConfig.port, () => {
    console.log('app listen 3000')
})
// const client = new Staking();
// const wallet = new Wallet();
//
// client.getStakingProductPosition().then((response) => {
//     // @ts-ignore
//     console.log(response)
// })
//     // @ts-ignore
// wallet.getDailyAccountSnapshot().then((response) => console.log(response)).catch(e => console.log(e))