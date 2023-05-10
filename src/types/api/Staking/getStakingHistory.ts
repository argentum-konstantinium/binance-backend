import {AxiosResponse} from 'axios'
export interface IGetStakingHistory {
    (): Promise<AxiosResponse<any>>
}