import {AxiosRequestConfig} from 'axios'

export interface IConfig {
    baseUrl: string;
    axiosConfig: AxiosRequestConfig
    baseQuery?: string;
}