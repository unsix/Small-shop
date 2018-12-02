const MenuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    icon: 'mail',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
        icon: 'mail',
      },
      {
        title: '弹框',
        key: '/ui/modals',
        icon: 'mail',
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
        icon: 'mail',
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
        icon: 'mail',
      },
      {
        title: '全局Message',
        key: '/ui/messages',
        icon: 'mail',
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
        icon: 'mail',
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
        icon: 'mail',
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
        icon: 'mail',
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    icon: 'mail',
    children: [
      {
        title: '登录',
        key: '/form/login',
        icon: 'mail',
      },
      {
        title: '注册',
        key: '/form/reg',
        icon: 'mail',
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    icon: 'mail',
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
        icon: 'mail',
      },
      {
        title: '高级表格',
        key: '/table/high',
        icon: 'mail',
      }
    ]
  },
  {
    title: '富文本',
    key: '/rich',
    icon: 'mail',
  },
  {
    title: '城市管理',
    key: '/city',
    icon: 'mail',
  },
  {
    title: '订单管理',
    key: '/order',
    icon: 'mail',
    btnList: [
      {
        title: '订单详情',
        key: 'detail',
        icon: 'mail',
      },
      {
        title: '结束订单',
        key: 'finish',
        icon: 'mail',
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user',
    icon: 'mail',
  },
  {
    title: '车辆地图',
    key: '/bikeMap',
    icon: 'mail',
  },
  {
    title: '图标',
    key: '/charts',
    icon: 'mail',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'mail',
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'mail',
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'mail',
      },
    ]
  },
];
export default MenuList