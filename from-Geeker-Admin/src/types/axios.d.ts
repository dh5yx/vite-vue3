import { AxiosRequestConfig } from 'axios';
import { TOKEN_KEY } from '@/config';
declare module 'axios' {
	export interface AxiosRequestConfig {
		// [自定义属性声明]
		retry?: any;
	}
}
