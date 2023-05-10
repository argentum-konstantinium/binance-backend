import {IGetStakingHistory} from "./getStakingHistory";
import {IGetStakingProductList} from "@src/types/api/Staking/getStakingProductList";
import {IGetStakingProductPosition} from "@src/types/api/Staking/getStakingProductPosition";
export interface IStaking {
    baseQuery: string;
    getStakingHistory: IGetStakingHistory;
    getStakingProductList: IGetStakingProductList;
    getStakingProductPosition: IGetStakingProductPosition;
}