<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 17:16:43
 * @LastEditors: dh
 * @LastEditTime: 2022-08-17 14:34:47
-->
<template>
	<div class="content-box">
		<span class="text">ιΏζζδ»€ ππππππ</span>
		<div class="box-content">
			<el-button type="primary" v-longpress:1000="longpress">ιΏζ1η§θ§¦εδΊδ»Ά</el-button>
			<el-button type="primary" v-longpress:2000="longpress">ιΏζ2η§θ§¦εδΊδ»Ά</el-button>
			<el-button type="primary" v-longpress:3000="longpress">ιΏζ3η§θ§¦εδΊδ»Ά</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
const longpress = () => {
	ElMessage.success('ιΏζδΊδ»Άθ§¦εζε πππ');
};
</script>

<style scoped lang="scss"></style>
