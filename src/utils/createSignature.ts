import * as crypto from "crypto";
import {API_SECRET} from "@root/keys/api";
import {binancePrivateKey} from "@root/keys/binance_Private_key";
export const createSignatureWithPrivateKey = (querystring: string) => {
    const signature = crypto.createSign('sha256').update(querystring).sign({
        key: binancePrivateKey,
        passphrase: ''
    }, 'base64')
    return encodeURIComponent(signature);
}

export const createSignatureWithApiSecret = (querystring: string) => {
    return crypto.createHmac('sha256', API_SECRET).update(querystring).digest('hex')
}