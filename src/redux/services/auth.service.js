import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../constants/services.constants";

export function UserLoginService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.USER_LOGIN,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then((response) => {
        console.log("Response=============> ", response);
        if(response.data.statusCode) {
            throw new Error("Invalid Email");
        }
        return resolve(response);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
}