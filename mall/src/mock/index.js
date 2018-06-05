// 引入mockjs http://mockjs.com
import Mock from 'mockjs'
// 获取 mock.Random 对象
import urls from '../api/urls'


// Mock Data
import * as datafile from './datafile'


const Locale_Mock_Data = {
  datafile: datafile,
};

const mock = (locale) => {
  let data = Locale_Mock_Data[locale];
  data = data || datafile;


// Mock.mock( url, post/get , 返回的数据);

  Mock.mock(urls.GET_COMMODITY_LIST, 'get', data.COMMODITY_LIST);
};

export {mock};
