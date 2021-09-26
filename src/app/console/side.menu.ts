
export let SideMenu = [
  {
    title: '控制台',
    icon: 'dashboard',
    router: 'dash',
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
    ]
  },
  {
    title: '告警管理',
    icon: 'bell',
    open: false,
    disable: true,
    children: [
      {
        title: '告警日志',
        router: 'alarm'
      },
      {
        title: '告警订阅',
        router: 'subscribe'
      },
      {
        title: '语音记录',
        router: 'voice'
      },
    ]
  },
  {
    title: '数据分析',
    icon: 'bar-chart',
    open: false,
    disable: true,
    children: [
      {
        title: '数据分析',
        router: 'statistic'
      },
    ]
  },
  {
    title: '设置',
    icon: 'setting',
    open: false,
    children: [
      {
        title: '用户',
        router: 'user'
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
    router: 'logout'
  }
];
