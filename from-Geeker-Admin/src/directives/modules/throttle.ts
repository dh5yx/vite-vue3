/*
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 09:44:18
 * @LastEditors: dh
 * @LastEditTime: 2022-08-30 09:23:29
 */
import type { DirectiveBinding } from 'vue';
import { EventUtils } from '@/utils/eventUtils';
import { throttle } from '@/utils/debounce';

interface ElType extends HTMLElement {
	callback: Function;
}

export default {
	mounted(el: ElType, binding: DirectiveBinding) {
		const time = Number(binding.arg);
		const type = Object.keys(binding.modifiers)[0];
		el.callback = throttle(binding.value, time);
		EventUtils.addEvent(el, type, el.callback);
	},
	beforeUnmount(el: ElType, binding: DirectiveBinding) {
		const type = Object.keys(binding.modifiers)[0];
		EventUtils.removeEvent(el, type, el.callback);
	},
};
