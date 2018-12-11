
const menuList = [
  {
    title: '首页',
    key: '/home',
  },
  {
    title: '搜索',
    key: '/search',
  },
  {
    title: '购物车',
    key: '/shopcart',
  },
  {
    title: '个人中心',
    key: '/user',
    children:[
      {
        title:'订单合同',
        key:'/user/contract'
      },
      {
        title:'管理地址',
        key:'/user/adress'
      },
      {
        title:'开票记录',
        key:'/user/recording'
      },
    ]
  },
  {
    title:'设置',
    key:'/seting',
    children: [
      {
        title: '修改密码',
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
  {
    title: '权限设置',
    key: '/permission'
  },
];
export default menuList;