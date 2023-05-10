

export interface IRoute {
    method: string;
    handler: Function;
    route: string;
    children?: IRoute[]
}


