import handler from "@src/controllers/staking/list";
import {IRoute} from "@src/types/router/route";

const route: IRoute = {
    method: 'get',
    route: 'list',
    handler,
}
export default route;