/**
 * 地区 API
 */
import jsonp from 'jsonp';

class areaPickService {
  static getArea(params) {
    return new Promise(((resolve, reject) => {
      jsonp(`//d.jd.com/area/get?fid=${params}&t=${Math.floor(Math.random() * 10000)}`, null, (err, ret) => {
        if (err) {
          reject(err);
        } else {
          resolve(ret);
        }
      });
    }));
  }
}

export default areaPickService;
