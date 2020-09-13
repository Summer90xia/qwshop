import common from './common';
const baseUrl = common.baseUrl;
export default 
{
     /**
     * 青梧商城PC接口
     * <www.qingwuit.com>
     */

    // 登录验证
    "homeLogin" : baseUrl + "login", // 登录
    "homeRegister" : baseUrl + "register", // 注册
    "homeForgetPassword" : baseUrl + "forget_password", // 忘记密码
    "homeLogout" : baseUrl + "logout", // 登出
    "homeCheckLogin" : baseUrl + "check_login", // 检测是否登录
    "homeSendSms" : baseUrl + "send_sms", // 发送短信

    'homeCommon' : baseUrl + 'common',  // pC公共数据获取
    'homeAgreement' : baseUrl + 'agreement',  // 站点协议
    'homeGoodsClasses' : baseUrl + 'goods_classes',  // 商品分类获取

    // 全国省市区
    'homeAreas' : baseUrl + 'areas',  

    // PC端首页获取信息
    'homeIndex' : baseUrl + 'index',

    // 商品
    'homeGoods' : baseUrl + 'goods',

    // 购物车
    'homeCarts' : baseUrl + 'carts',

    // 收货地址
    'homeAddress' : baseUrl + 'addresses',

    // 订单处理
    'homeOrder' : baseUrl + 'order',

    // 商家入驻
    'homeStoreVerify' : baseUrl + 'store/store_verify',  // 商家审核状态
    'homeStoreJoin' : baseUrl + 'store/store_join',  // 商家审核状态
    'homeStoreJoinUpload' : baseUrl + 'store/join/upload',  // 商家入驻图片上传

    
};