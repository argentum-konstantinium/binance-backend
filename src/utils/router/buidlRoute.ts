import {IController} from "@src/types/controllers";
import express from "express";


const buildRoute = (controllers: IController[]) => {
    const router = express.Router();
    for (const controller of controllers) {
        const {route, handler, children, method} = controller;
        // @ts-ignore
        router[method]('/' + route, handler)
        if (children?.length > 0) {
            const childRouter = buildRoute(children)
            router.use('/' + route, childRouter)
        }
    }

    return router;
}
export default buildRoute

