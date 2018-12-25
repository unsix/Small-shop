
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
        key:'/user/order',
        icon:'ordered-list'
      },
      // {
      //   title:'我的评价',
      //   key:'/user/evaluate'
      // },
      {
        title:'管理收藏',
        key:'/user/collection',
        icon:'star'
      },
      // {
      //   title:'退款售后',
      //   key:'/user/refund_after'
      // },
      {
        title:'管理地址',
        key:'/user/address',
        icon:'form'
      },
      {
        title:'我的发票',
        key:'/user/invoice',
        icon:'snippets'
      },
      {
        title:'设置',
        key:'/setting',
        icon:'setting',
        children: [
          {
            title: '重置密码',
            key: '/setting/reset'
          },
          {
            title: '意见反馈',
            key: '/setting/feedback'
          },
          {
            title: '关于我们',
            key: '/setting/our'
          },
          {
            title: '联系客服',
            key: '/setting/service'
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