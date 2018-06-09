import axios from "axios";

export function doGet(url, params, config) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params, header: config})
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error)
      });
  })
};
