import {doGet} from './axios/util';
import URLS from "./urls";

export default {
  loadCommodityList(username) {
    console.log("555555")
    return doGet(URLS.GET_COMMODITY_LIST);
  },
};
