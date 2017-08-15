/**
 * 工具类
 * @authors Mill (876753183@qq.com)
 * @date    2017-08-15 17:45:20
 * @version 0.0.1
 */


var Util = {

  /**
   * 判断字符串是否为空值
   * @param  {[type]}  str [description]
   * @return {Boolean}     [description]
   */
  isEmpty(str) {
    if (null === str || undefined === str || '' === str) {
      return true;
    }
    return false;
  }
}

export default Util;
