
const menuList = [
  {
    title: '首页',
    key: '/home',
    icon:'home',

  },
  // {
  //   title: '五金商品',
  //   key: '/shop',
  //   icon:'shop',
  //   children:[
  //     {
  //       title: '所有商品',
  //       key: '/shop/all',
  //     },
  //   ]
  // },
  {
    title: '购物车',
    key: '/shopcart',
    icon:'shopping-cart',
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
        title:'我的评价',
        key:'/user/evaluate'
      },
      {
        title:'我的发票',
        key:'/user/invoice'
      },
      {
        title:'退款售后',
        key:'/user/refund_after'
      },
      {
        title:'管理地址',
        key:'/user/adress'
      },
      {
        title:'设置',
        key:'/seting',
        icon:'setting',
        children: [
          {
            title: '重置密码',
            key: '/seting/reset'
          },
          {
            title: '意见反馈',
            key: '/seting/feedback'
          },
          {
            title: '关于我们',
            key: '/seting/our'
          },
          {
            title: '联系客服',
            key: '/seting/service'
          },
        ]
      },
    ]
  },
  // {
  //   title: '搜索',
  //   key: '/search',
  //   icon:'search',
  //   children:[
  //     {
  //       title: '搜索',
  //       key: '/search',
  //     },
  //   ]
  // },
  // {
  //   title: '权限设置',
  //   key: '/permission'
  // },
];
export default menuList;