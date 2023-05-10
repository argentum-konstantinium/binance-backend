import {AxiosInstance} from "axios";
import {IGetQuery} from "@src/types/api/BaseApi/getQuery";
import {IGetQueryStringWithPrivateKey} from "@src/types/api/BaseApi/getQueryStringWithPrivateKey";
import {ICreateSignatureWithPrivateKey} from "@src/types/api/BaseApi/createSignatureWithPrivateKey";

export interface IBaseApi {
    axios: AxiosInstance;
    baseUrl: string;
    baseQuery?: string;

    readonly timestamp: number;

    getQuery: IGetQuery;
    getQueryStringWithPrivateKey: IGetQueryStringWithPrivateKey;
    createSignatureWithPrivateKey: ICreateSignatureWithPrivateKey;
}