import axios from 'axios'
import data from './../assets/js/menu.json'

axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const Service = {

  getMenuList: params => {
    return GET_REQ(data, params);
  }
}



/**
 * get请求
 * @param {[type]} url    [description]
 * @param {[type]} params [description]
 */
function GET_REQ(url, params) {
  return axios.get(url, { params: params }).then(res => res.data);
}

/**
 * post请求
 * @param {[type]} url    [description]
 * @param {[type]} params [description]
 */
function POST_REQ(url, params) {
  return axios.post(url, params).then(res => res.data);
}

export default Service
