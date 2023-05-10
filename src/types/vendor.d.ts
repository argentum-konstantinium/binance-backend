import Staking from "@src/api/Staking";
import Wallet from "@src/api/Wallet";
import {IApi} from "./api";

declare global {
    module NodeJS {
        interface Global {
            api: IApi
        }
        interface globalThis {
            api: IApi
        }
    }

}