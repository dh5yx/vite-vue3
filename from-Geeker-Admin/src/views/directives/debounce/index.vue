<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 15:46:53
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:21
-->
<template>
	<div class="content-box">
		<span class="text">้ฒๆๆไปค ๐๐๐๐๐๐</span>
		<div class="box-content">
			<el-button type="primary" v-debounce:500.click="debounceClick">้ฒๆๆ้ฎ (0.5็งๅๆง่ก)</el-button>
			<el-button type="primary" v-debounce:2000.click="debounceClick">้ฒๆๆ้ฎ (2็งๅๆง่ก)</el-button>
			<el-button type="primary" v-debounce:5000.click="debounceClick">้ฒๆๆ้ฎ (5็งๅๆง่ก)</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

const debounceClick = () => {
	ElMessage.success('ๆๆฏ้ฒๆๆ้ฎ่งฆๅ็ไบไปถ ๐๐๐');
};
</script>

<style scoped lang="scss"></style>
