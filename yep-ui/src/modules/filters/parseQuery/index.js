export default {
  install: (Vue) => {
    Vue.filter('parseQuery', (url) => {
      let reg_url = /^[^\?]+\?([\w\W]+)$/,
        reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g,
        arr_url = reg_url.exec(url),
        ret = {};
      if (arr_url && arr_url[1]) {
        let str_para = arr_url[1],
          result;
        while ((result = reg_para.exec(str_para)) != null) {
          ret[result[1]] = result[2];
        }
      }
      return ret;
    });
  },
};
