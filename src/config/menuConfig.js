
const menuList = [
  {
    title: '首页',
    key: '/home',
    icon:'home',
    children:[
      {
        title: '首页',
        key: '/home',
      },
    ]
  },
  {
    title: '搜索',
    key: '/search',
    icon:'search',
    children:[
      {
        title: '搜索',
        key: '/search',
      },
    ]
  },
  {
    title: '五金商品',
    key: '/shop',
    icon:'shop',
    children:[
      {
        title: '所有商品',
        key: '/shop/all',
      },
    ]
  },
  {
    title: '购物车',
    key: '/shopcart',
    icon:'shopping-cart',
    children:[
      {
        title: '购物车',
        key: '/shopcart',
      },
    ]
  },
  {
    title: '个人中心',
    key: '/user',
    icon:'user',
    children:[
      {
        title:'我的订单',
        key:'/user/order'
      },
      {
        title:'管理地址',
        key:'/user/adress'
      },
      {
        title:'开票记录',
        key:'/user/recording'
      },
      {
        title:'设置',
        key:'/user/seting',
        icon:'setting',
        children: [
          {
            title: '重置密码',
            key: 'user/seting/reset'
          },
          {
            title: '意见反馈',
            key: 'user/seting/feedback'
          },
          {
            title: '关于我们',
            key: 'user/seting/our'
          },
          {
            title: '联系客服',
            key: 'user/seting/service'
          },
        ]
      },
    ]
  },
  {
    title: '权限设置',
    key: '/permission'
  },
];
export default menuList;