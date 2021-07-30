
export let MainMenu = [
  {
    title: '控制台',
    icon: 'dashboard',
    router: 'dash',
    // open: true,
    // children: [
    //   {
    //     title: '仪表盘',
    //     router: 'dash'
    //   },
    // ]
  },
  {
    title: '通道管理',
    icon: 'block',
    children: [
      {
        title: '通道',
        router: 'tunnel'
      },
      {
        title: '接收器',
        router: 'acceptor'
      },
    ]
  },
  {
    title: '项目管理',
    icon: 'cluster', //project
    children: [
      {
        title: '项目',
        router: 'project'
      },
      {
        title: '设备',
        router: 'device'
      },
      {
        title: '模板',
        router: 'template'
      },
      {
        title: '元件',
        router: 'element'
      },
    ]
  },
  {
    title: '用户管理',
    icon: 'user',
    open: false,
    disable: true,
    children: [
      {
        title: '用户',
        router: 'user'
      },
      {
        title: '分组',
        router: 'group'
      },
    ]
  },
  {
    title: '系统扩展',
    icon: 'appstore-add',
    open: false,
    children: [
      {
        title: '插件',
        router: 'plugin'
      },
      {
        title: '协议',
        router: 'adapter'
      },
      {
        title: '二次开发',
        router: 'api'
      },
    ]
  },
  {
    title: '设置',
    icon: 'setting',
    open: false,
    children: [
      {
        title: '系统设置',
        router: 'setting'
      },
      {
        title: '修改密码',
        router: 'password'
      },
    ]
  },
  {
    title: '退出',
    icon: 'logout',
  }
];
