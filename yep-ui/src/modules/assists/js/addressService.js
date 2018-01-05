/**
 * 地址 API
 */
import jsonp from 'jsonp';
// import axios from 'axios'
class addressService {
  static getAddressList(params) {
    // return axios.get('//easybuy.jd.com/api/m/v1/address/getAddressList',{
    // })

    return new Promise(((resolve, reject) => jsonp(`${'//easybuy.jd.com/api/m/v1/address/getAddressList' + '?body={}&t='}${Math.floor(Math.random() * 10000)}`, null, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if (res.code === 201) {
          location.href = `https://plogin.m.jd.com/user/login.action?appId=331&returnurl=${encodeURIComponent(location.href)}`;
        }
        resolve(res);
      }
    })));
  }

  static deleteAddress(params) {
    // return axios.get('//easybuy.jd.com/api/m/v1/address/getAddressList',{
    // })

    return new Promise(((resolve, reject) => jsonp(`//easybuy.jd.com/api/m/v1/address/deleteAddress?body=${JSON.stringify(params)}&t=${Math.floor(Math.random() * 10000)}`, null, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })));
  }

  static setAddressAllDefault(params) {
    // return axios.get('//easybuy.jd.com/api/m/v1/address/getAddressList',{
    // })

    return new Promise(((resolve, reject) => jsonp(`//easybuy.jd.com/api/m/v1/address/setAddressAllDefault?body=${JSON.stringify(params)}&t=${Math.floor(Math.random() * 10000)}`, null, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })));
  }

  static updateAddress(params) {
    // return axios.get('//easybuy.jd.com/api/m/v1/address/getAddressList',{
    // })

    return new Promise(((resolve, reject) => jsonp(`//easybuy.jd.com/api/m/v1/address/updateAddress?body=${JSON.stringify(params)}&t=${Math.floor(Math.random() * 10000)}`, null, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if (res.code === 201) {
          location.href = `https://plogin.m.jd.com/user/login.action?appId=331&returnurl=${encodeURIComponent(location.href)}`;
        }
        resolve(res);
      }
    })));
  }
  static getMapSuggestion(params) {
    // http://easybuy.jd.com/api/m/v1/address/getMapSuggestion?body={%22getMapSuggestionParams%22:{%22keyWord%22:%22%E4%B8%80%E5%93%81%E4%BA%A6%E5%BA%84%22,%22region%22:%2751973%27}}&t=280&callback=__jp0

    return new Promise(((resolve, reject) => jsonp(`//easybuy.jd.com/api/m/v1/address/getMapSuggestion?body=${JSON.stringify(params)}&t=${Math.floor(Math.random() * 10000)}`, null, (err, res) => {
      if (err) {
        reject(err);
      } else {
        if (res.code === 201) {
          location.href = `https://plogin.m.jd.com/user/login.action?appId=331&returnurl=${encodeURIComponent(location.href)}`;
        }
        resolve(res);
      }
    })));
  }
}

export default addressService;
