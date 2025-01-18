const rootUrl = 'http://127.0.0.1:8360/admin/';

const api = {
    rootUrl : rootUrl,
    // express: {
    //     // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    //     appid: '123', // 对应快递鸟用户后台 用户ID
    //     appkey: '123123', // 对应快递鸟用户后台 API key
    //     request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
    // },
	// 4.19更新，物流查询不需要以上配置，只需要在server的config配置阿里云物流接口就可以
    qiniu: 'http://up-z0.qiniu.com',
    azureBlobContainerRootUrl: 'azureBlobContainerRootUrlExample'
};


// import api from './config/api'
// Axios.defaults.baseURL = api.rootUrl;

export default api
