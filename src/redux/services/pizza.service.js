import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../constants/services.constants";

export function pizzaService() {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_PIZZA,
      method: METHODS.GET,
    };
    Axios.request(config)
      .then((response) => {
        console.log(response.data);
        return resolve(response);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
}
