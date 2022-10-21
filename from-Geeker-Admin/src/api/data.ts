// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const menu = [
	{
		path: '/home/index',
		name: 'home',
		component: '/home/index',
		meta: { icon: 'HomeFilled', title: '首页', isLink: '', isHide: false, isFull: false, isAffix: true, isKeepAlive: true },
	},
	{
		path: '/dataScreen',
		name: 'dataScreen',
		component: '/dataScreen/index',
		meta: { icon: 'Histogram', title: '数据大屏', isLink: '', isHide: false, isFull: true, isAffix: false, isKeepAlive: true },
	},
	{
		path: '/proTable',
		name: 'proTable',
		redirect: '/proTable/useHooks',
		meta: { icon: 'MessageBox', title: '超级表格', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/proTable/useHooks',
				name: 'useHooks',
				component: '/proTable/useHooks/index',
				meta: { icon: 'Menu', title: '使用 Hooks', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/proTable/useComponent',
				name: 'useComponent',
				component: '/proTable/useComponent/index',
				meta: { icon: 'Menu', title: '使用 Component', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/proTable/useTreeFilter',
				name: 'useTreeFilter',
				component: '/proTable/useTreeFilter/index',
				meta: { icon: 'Menu', title: '使用 TreeFilter', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/proTable/useSelectFilter',
				name: 'useSelectFilter',
				component: '/proTable/useSelectFilter/index',
				meta: { icon: 'Menu', title: '使用 SelectFilter', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		redirect: '/dashboard/dataVisualize',
		meta: { icon: 'Odometer', title: 'Dashboard', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/dashboard/dataVisualize',
				name: 'dataVisualize',
				component: '/dashboard/dataVisualize/index',
				meta: { icon: 'Menu', title: '数据可视化', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/dashboard/embedded',
				name: 'embedded',
				component: '/dashboard/embedded/index',
				meta: { icon: 'Menu', title: '内嵌页面', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
	{
		path: '/form',
		name: 'form',
		redirect: '/form/proForm',
		meta: { icon: 'Tickets', title: '表单 Form', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/form/proForm',
				name: 'proForm',
				component: '/form/proForm/index',
				meta: { icon: 'Menu', title: '超级 Form', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/form/basicForm',
				name: 'basicForm',
				component: '/form/basicForm/index',
				meta: { icon: 'Menu', title: '基础 Form', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/form/validateForm',
				name: 'validateForm',
				component: '/form/validateForm/index',
				meta: { icon: 'Menu', title: '校验 Form', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/form/dynamicForm',
				name: 'dynamicForm',
				component: '/form/dynamicForm/index',
				meta: { icon: 'Menu', title: '动态 Form', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
	{
		path: '/echarts',
		name: 'echarts',
		redirect: '/echarts/waterChart',
		meta: { icon: 'TrendCharts', title: 'Echarts', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/echarts/waterChart',
				name: 'waterChart',
				component: '/echarts/waterChart/index',
				meta: { icon: 'Menu', title: '水型图', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/echarts/columnChart',
				name: 'columnChart',
				component: '/echarts/columnChart/index',
				meta: { icon: 'Menu', title: '柱状图', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/echarts/lineChart',
				name: 'lineChart',
				component: '/echarts/lineChart/index',
				meta: { icon: 'Menu', title: '折线图', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/echarts/pieChart',
				name: 'pieChart',
				component: '/echarts/pieChart/index',
				meta: { icon: 'Menu', title: '饼图', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/echarts/radarChart',
				name: 'radarChart',
				component: '/echarts/radarChart/index',
				meta: { icon: 'Menu', title: '雷达图', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/echarts/nestedChart',
				name: 'nestedChart',
				component: '/echarts/nestedChart/index',
				meta: { icon: 'Menu', title: '嵌套环形图', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
	{
		path: '/assembly',
		name: 'assembly',
		redirect: '/assembly/guide',
		meta: { icon: 'Briefcase', title: '常用组件', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/assembly/guide',
				name: 'guide',
				component: '/assembly/guide/index',
				meta: { icon: 'Menu', title: '引导页', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/assembly/selectIcon',
				name: 'selectIcon',
				component: '/assembly/selectIcon/index',
				meta: { icon: 'Menu', title: '图标选择器', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/assembly/selectFilter',
				name: 'selectFilter',
				component: '/assembly/selectFilter/index',
				meta: { icon: 'Menu', title: '分类筛选器', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/assembly/svgIcon',
				name: 'svgIcon',
				component: '/assembly/svgIcon/index',
				meta: { icon: 'Menu', title: 'SVG 图标', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/assembly/uploadImg',
				name: 'uploadImg',
				component: '/assembly/uploadImg/index',
				meta: { icon: 'Menu', title: '图片上传', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/assembly/batchImport',
				name: 'batchImport',
				component: '/assembly/batchImport/index',
				meta: { icon: 'Menu', title: '批量添加数据', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/assembly/wangEditor',
				name: 'wangEditor',
				component: '/assembly/wangEditor/index',
				meta: { icon: 'Menu', title: '富文本编辑器', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/assembly/draggable',
				name: 'draggable',
				component: '/assembly/draggable/index',
				meta: { icon: 'Menu', title: '拖拽组件', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
	{
		path: '/directives',
		name: 'directives',
		redirect: '/directives/copyDirect',
		meta: { icon: 'Stamp', title: '自定义指令', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/directives/copyDirect',
				name: 'copyDirect',
				component: '/directives/copyDirect/index',
				meta: { icon: 'Menu', title: '复制指令', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/directives/watermarkDirect',
				name: 'watermarkDirect',
				component: '/directives/watermarkDirect/index',
				meta: { icon: 'Menu', title: '水印指令', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/directives/dragDirect',
				name: 'dragDirect',
				component: '/directives/dragDirect/index',
				meta: { icon: 'Menu', title: '拖拽指令', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/directives/debounceDirect',
				name: 'debounceDirect',
				component: '/directives/debounceDirect/index',
				meta: { icon: 'Menu', title: '防抖指令', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/directives/throttleDirect',
				name: 'throttleDirect',
				component: '/directives/throttleDirect/index',
				meta: { icon: 'Menu', title: '节流指令', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/directives/longpressDirect',
				name: 'longpressDirect',
				component: '/directives/longpressDirect/index',
				meta: { icon: 'Menu', title: '长按指令', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
	{
		path: '/menu',
		name: 'menu',
		redirect: '/menu/menu1',
		meta: { icon: 'List', title: '菜单嵌套', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/menu/menu1',
				name: 'menu1',
				component: '/menu/menu1/index',
				meta: { icon: 'Menu', title: '菜单1', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
			{
				path: '/menu/menu2',
				name: 'menu2',
				redirect: '/menu/menu2/menu21',
				meta: { icon: 'Menu', title: '菜单2', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
				children: [
					{
						path: '/menu/menu2/menu21',
						name: 'menu21',
						component: '/menu/menu2/menu21/index',
						meta: { icon: 'Menu', title: '菜单2-1', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
					},
					{
						path: '/menu/menu2/menu22',
						name: 'menu22',
						redirect: '/menu/menu2/menu22/menu221',
						meta: { icon: 'Menu', title: '菜单2-2', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
						children: [
							{
								path: '/menu/menu2/menu22/menu221',
								name: 'menu221',
								component: '/menu/menu2/menu22/menu221/index',
								meta: { icon: 'Menu', title: '菜单2-2-1', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
							},
							{
								path: '/menu/menu2/menu22/menu222',
								name: 'menu222',
								component: '/menu/menu2/menu22/menu222/index',
								meta: { icon: 'Menu', title: '菜单2-2-2', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
							},
						],
					},
					{
						path: '/menu/menu2/menu23',
						name: 'menu23',
						component: '/menu/menu2/menu23/index',
						meta: { icon: 'Menu', title: '菜单2-3', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
					},
				],
			},
			{
				path: '/menu/menu3',
				name: 'menu3',
				component: '/menu/menu3/index',
				meta: { icon: 'Menu', title: '菜单3', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
	{
		path: '/link',
		name: 'link',
		redirect: '/link/gitee',
		meta: { icon: 'Paperclip', title: '外部链接', isLink: '', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
		children: [
			{
				path: '/link/gitee',
				name: 'gitee',
				component: '/link/gitee/index',
				meta: {
					icon: 'Menu',
					title: 'Gitee 仓库',
					isLink: 'https://gitee.com/laramie/Geeker-Admin',
					isHide: false,
					isFull: false,
					isAffix: false,
					isKeepAlive: true,
				},
			},
			{
				path: '/link/github',
				name: 'github',
				component: '/link/github/index',
				meta: {
					icon: 'Menu',
					title: 'GitHub 仓库',
					isLink: 'https://github.com/HalseySpicy/Geeker-Admin',
					isHide: false,
					isFull: false,
					isAffix: false,
					isKeepAlive: true,
				},
			},
			{
				path: '/link/juejin',
				name: 'juejin',
				component: '/link/juejin/index',
				meta: {
					icon: 'Menu',
					title: '掘金文档',
					isLink: 'https://juejin.cn/post/7080820051422478366',
					isHide: false,
					isFull: false,
					isAffix: false,
					isKeepAlive: true,
				},
			},
			{
				path: '/link/myBlog',
				name: 'myBlog',
				component: '/link/myBlog/index',
				meta: { icon: 'Menu', title: '个人博客', isLink: 'http://www.spicyboy.cn', isHide: false, isFull: false, isAffix: false, isKeepAlive: true },
			},
		],
	},
];
