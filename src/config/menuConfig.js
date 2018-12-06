const MenuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: '商品展示',
    key: '/form',
    icon: 'copy',
  },

  {
    title: '个人中心',
    key: '/ui',
    icon: 'user',
    children: [
      {
        title: '我的账户',
        key: '/ui/buttons',
        icon: 'mail',
      },
      {
        title: '我的订单',
        key: '/ui/buttons',
        icon: 'mail',
      },
    ]
  },
];
export default MenuList