export default [
    // 首页
    {path: '/',name: 'home_index',component: () => import('@/views/Home/index')},

    

    // 所有父视图
    {path: '/store/join/index',name: 'home_base_view',component: () => import('@/views/Home/default'),children:[

        // 登录注册
        {path: '/user/login',name: 'home_user_login',component: () => import('@/views/Home/auth/login')}, // 登录
        {path: '/user/register',name: 'home_user_register',component: () => import('@/views/Home/auth/register')}, // 注册
        {path: '/user/forget_password',name: 'home_user_forget_password',component: () => import('@/views/Home/auth/forget_password')}, // 忘记密码

        // 商家入驻
        {path: '/store/join/index',name: 'home_store_join_default',component: () => import('@/views/Home/store/join/default')}, // 入驻页面
        {path: '/store/join/step_1',name: 'home_store_join_step_1',component: () => import('@/views/Home/store/join/step_1')}, // 入驻协议
        {path: '/store/join/step_2',name: 'home_store_join_step_2',component: () => import('@/views/Home/store/join/step_2')}, // 资料填写
        {path: '/store/join/step_3',name: 'home_store_join_step_3',component: () => import('@/views/Home/store/join/step_3')}, // 等待审核

        // 商品
        {path: '/goods/:id',name: 'home_goods_info',component: () => import('@/views/Home/goods/info')}, // 详情
        {path: '/s/:params?',name: 'home_goods_list',component: () => import('@/views/Home/goods/list')}, // 列表

        // 购买
        {path: '/order/create_order/:params',name: 'home_create_order',component: () => import('@/views/Home/orders/index')}, // 创建订单
        {path: '/order/order_pay/:params',name: 'home_order_pay',component: () => import('@/views/Home/orders/order_pay')}, // 支付订单
        {path: '/order/pay_success',name: 'home_pay_success',component: () => import('@/views/Home/orders/pay_success')}, // 支付成功

        // 用户中心
        {path: '/user',name: 'home_user',component: () => import('@/views/Home/users/index'),children:[
            {path: '/user',name: 'home_user_default',component: () => import('@/views/Home/users/default')}, // 用户中心首页
            {path: '/user/address',name: 'home_user_address',component: () => import('@/views/Home/users/address/index')}, // 用户收货地址列表
            {path: '/user/address/form/:id?',name: 'home_user_address_form',component: () => import('@/views/Home/users/address/form')}, // 用户收货地址编辑
        ]}, 
    ]},

];