<!--
 * @Description:
 * @Author: dh
 * @Date: 2022-07-26 15:46:53
 * @LastEditors: dh
 * @LastEditTime: 2022-08-12 14:24:27
-->
<template>
	<div class="content-box">
		<span class="text">่ๆตๆไปค ๐๐๐๐๐๐</span>
		<div class="box-content" style="margin-top: 200px">
			<el-button type="primary" v-throttle:1000.click="debounceClick">่ๆตๆ้ฎ (1็งๅๆง่ก)</el-button>
			<el-button type="primary" v-throttle:2000.click="debounceClick">่ๆตๆ้ฎ (2็งๅๆง่ก)</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';

const debounceClick = () => {
	ElMessage.success('ๆๆฏ่ๆตๆ้ฎ่งฆๅ็ไบไปถ ๐๐๐');
};
</script>

<style scoped lang="scss"></style>
