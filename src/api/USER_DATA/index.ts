import {Axios} from "axios";
import {API_KEY} from "../../constants/api";
export default new Axios({
    headers: {
        "X-MBX-APIKEY": API_KEY
    }
})