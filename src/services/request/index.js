import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get(config) {
    return this.request({ ...config, method: "get" })
  }
  post(config) {
    return this.request({ ...config, method: "post" })
  }
}
const hyRequest = new HYRequest(BASE_URL, TIMEOUT)
export default hyRequest