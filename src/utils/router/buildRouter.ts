import {Express} from "express";
import {IRouter} from "@src/types/router";
export default (app: Express, routers: IRouter[]) => {
    for (const router of routers) {
        app.use('/' + router.routeName, router.router)
    }
}