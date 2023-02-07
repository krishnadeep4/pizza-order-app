import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../constants/services.constants";

export function UserRegisterService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.USER_REGISTER,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then((response) => {
        console.log("RESPONSE-----> ", response);
        console.log("RESPONSE  DDD-----> ", response.data);
        if(response.data != 'DONE') {
            throw new Error("Email Already Exist");
        }
        return resolve(response);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
}