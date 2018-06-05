export default {
  state: {
    id: null,
    name: null,
    price: null,
  },
  actions: {
    loadCommodityList() {
      return new Promise((resolve,reject) =>{
        return [
          {
            id: '1',
            name: 'wang',
            price: '12',
          },
          {
            id: '2',
            name: 'pin',
            price: '22',
          }
        ];
      })
    }
  }
};
