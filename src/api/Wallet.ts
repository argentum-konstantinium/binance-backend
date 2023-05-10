import BaseApi from "./BaseApi";
import {API_KEY} from "../constants/api";

class Wallet extends BaseApi {
    constructor() {
        const baseUrl = 'https://api.binance.com/sapi/v1/';
        const config = {
            baseUrl,
            baseQuery: "recvWindow=5000",
            axiosConfig: {
                headers: {
                    "X-MBX-APIKEY": API_KEY
                },
                baseURL: baseUrl
            }
        }
        super(config);
    }

    getAllCoinsInformation() {
        const query = this.getQueryStringWithPrivateKey({
            timestamp: String(this.timestamp),
        })
        return this.axios.get(`capital/config/getall${query}`)
    }
    getDailyAccountSnapshot() {
        const query = this.getQueryStringWithPrivateKey({
            timestamp: String(this.timestamp),
            type: "SPOT"
        })
        return this.axios.get(`accountSnapshot${query}`)
    }
}

export default Wallet;