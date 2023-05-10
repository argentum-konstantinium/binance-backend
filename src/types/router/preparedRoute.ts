import {Router} from "express";

export interface IPreparedRoute {
    routeName: string;
    router: Router
}

