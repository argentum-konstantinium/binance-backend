import BaseApi from "./BaseApi";
import {API_KEY} from "@root/keys/api";
import {IStaking} from "@src/types/api/Staking";
class Staking extends BaseApi implements IStaking {
    baseQuery: string;
    constructor() {

        const baseUrl = 'https://api.binance.com/sapi/v1/staking';
        const config = {
            baseUrl,
            axiosConfig: {
                headers: {
                    "X-MBX-APIKEY": API_KEY
                },
                baseURL: baseUrl
            }
        }
        super(config);
        this.baseQuery = 'product=STAKING&recvWindow=5000'
    }


    getStakingHistory() {
        const query = this.getQueryStringWithPrivateKey({
            txnType: 'Subscription',
            timestamp: String(this.timestamp),
        })
        return this.axios.get(`/stakingRecord${query}`)
    }

    getStakingProductList() {
        const query = this.getQueryStringWithPrivateKey({
            timestamp: String(this.timestamp),
        })
        return this.axios.get(`/productList${query}`)
    }

    getStakingProductPosition() {
        const query = this.getQueryStringWithPrivateKey({
            timestamp: String(this.timestamp)
        })
        return this.axios.get(`/position${query}`)
    }

}
export default Staking;