
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
    icon: 'cluster',
    children: [
      {
        title: '项目',
        router: 'a'
      },
      {
        title: '设备',
        router: 'a'
      },
      {
        title: '模板',
        router: 'b'
      },
      {
        title: '元件',
        router: 'areas'
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
        router: 'users'
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
        router: 'keyword'
      },
      {
        title: '协议',
        router: 'setting-company'
      },
      {
        title: '二次开发',
        router: 'setting-company'
      },
    ]
  },
  {
    title: '设置',
    icon: 'setting',
    open: false,
    children: [
      {
        title: '系统',
        router: 'setting'
      },
      {
        title: '修改密码',
        router: 'setting'
      },
    ]
  },
  {
    title: '退出',
    icon: 'logout',
  }
];
