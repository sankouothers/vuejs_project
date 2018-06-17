import api from '../../api';
import commodity from "../../api/commodity";

export default {
  state: {
    commodityList: [],
  },
  actions: {
    loadCommodityList() {
      return new Promise((resolve, reject) => {
        console.log("33333")
        api.loadCommodityList()
          .then(res => {
            console.log("111",resolve)
            console.log("222",res)
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};
