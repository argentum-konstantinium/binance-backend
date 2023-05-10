import axios, {AxiosInstance } from "axios";
import {IConfig} from "@src/types/api/BaseApi/config";
import crypto from "crypto";
import {API_SECRET} from "@root/keys/api";
import {binancePrivateKey} from "@root/keys/binance_Private_key";
import {IBaseApi} from "@src/types/api/BaseApi";
import {createSignatureWithPrivateKey} from "@src/utils/createSignature";
import {createSignatureWithApiSecret} from "@src/utils/createSignature";
export default abstract class BaseApi implements IBaseApi {
    axios: AxiosInstance;
    baseUrl: string;
    baseQuery?: string;

    protected constructor(config: IConfig) {
        const {axiosConfig, baseUrl, baseQuery} = config
        this.axios = axios.create(axiosConfig);
        this.baseUrl = baseUrl;

        this.baseQuery = baseQuery;
    }

    get timestamp() {
        return Date.now();
    }

    getQuery(params: Record<string, string>) {
        let query = this.baseQuery ?? '';
        for (const queryParam in params) {
            query += `&${queryParam}=${params[queryParam]}`
        }
        return query;
    }

    getQueryStringWithPrivateKey(params: Record<string, string>) {
        const query = this.getQuery(params);
        const signature = this.createSignatureWithPrivateKey(query);
        return `?${query}&signature=${signature}`
    }

    getQueryStringWithApiSecret(params: Record<string, string>) {
        const query = this.getQuery(params);
        return this.createSignatureWithApiSecret(query);
    }

    createSignatureWithPrivateKey(querystring: string) {
       return createSignatureWithPrivateKey(querystring);
    }

    createSignatureWithApiSecret(querystring: string) {
        return createSignatureWithApiSecret(querystring)
    }
}