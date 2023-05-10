import buildRoute from "@src/utils/router/buidlRoute";

import list from './list'
import {IPreparedRoute} from "@src/types/router/preparedRoute";

const router = buildRoute([list]);

const route: IPreparedRoute = {
    routeName: 'staking',
    router
}
export default route;