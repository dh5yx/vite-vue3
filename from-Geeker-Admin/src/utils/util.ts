/*
 * @Description:
 * @Author: dh
 * @Date: 2022-08-09 15:57:06
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 09:53:15
 */
/**
 * @description: 获取指定区间 随机整数
 * @param {number} start  随机数最小值
 * @param {number} end 随机数最大值
 * @return {*}
 */
export function randomNum(start: number, end: number) {
	return Math.floor(Math.random() * (end - start) + start);
}

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export function getBrowserLang() {
	let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
	let defaultBrowserLang = '';
	if (browserLang.toLowerCase() === 'cn' || browserLang.toLowerCase() === 'zh' || browserLang.toLowerCase() === 'zh-cn') {
		defaultBrowserLang = 'zh';
	} else {
		defaultBrowserLang = 'en';
	}
	return defaultBrowserLang;
}

/**
 * @description 使用递归处理路由菜单，生成一维数组
 * @param {Array} menuList 所有菜单列表
 * @param {Array} newArr 菜单的一维数组
 * @return array
 */
export function handleRouter(routerList: Menu.MenuOptions[], newArr: string[] = []) {
	routerList.forEach((item: Menu.MenuOptions) => {
		typeof item === 'object' && item.path && newArr.push(item.path);
		item.children && item.children.length && handleRouter(item.children, newArr);
	});
	return newArr;
}
