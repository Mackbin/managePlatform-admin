<template>
	<div class="sidebar" :class="{ collapse: isCollapse }">
		<div class="logo">
			<img class="logo-img" src="@/icons/logo.svg" alt="管理平台" />
			<span class="logo-name">管理平台</span>
		</div>
		<el-scrollbar wrap-class="scrollbar-wrapper" style="height:100%">
			<el-menu
				mode="vertical"
				:default-active="$route.path"
				background-color="#001529"
				text-color="#9A9A9A"
				active-text-color="#fff"
				:collapse="isCollapse"
			>
				<div v-for="(route, index) in routers" :key="index.toString()">
					<router-link
						:to="route.path"
						v-if="route.children && route.children.length === 1"
					>
						<el-menu-item
							:index="route.path"
							v-if="route.sidebarShow"
							@click="routerClick(route, index)"
						>
							<i :class="route.meta.icon"></i>
							<span slot="title">{{ route.meta.title }}</span>
						</el-menu-item>
					</router-link>
					<div v-else>
						<el-submenu
							:index="index.toString()"
							v-if="route.sidebarShow"
						>
							<template slot="title">
								<i :class="route.meta.icon"></i>
								<span>{{ route.meta.title }}</span>
							</template>
							<router-link
								:to="item.path"
								v-for="(item, x) in route.children"
								:key="x.toString()"
							>
								<el-menu-item
									:index="item.path"
									@click="routerClick(item, x)"
								>
									<i :class="item.meta.icon"></i>
									<span slot="title">{{
										item.meta.title
									}}</span>
								</el-menu-item>
							</router-link>
						</el-submenu>
					</div>
				</div>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			defaultActive: "0",
			obj: {}
		};
	},
	computed: {
		...mapGetters([
			// 'addRouters',
			"sidebar",
			"editableTabsArr",
			"editableTabsValue"
		]),
		isCollapse() {
			return this.sidebar.opened;
		},
		routers() {
			return this.$router.options.routes;
		}
	},
	methods: {
		isActive(route) {
			return this.$route.path;
		},
		routerClick(route, index) {
			// this.$router.push(route.path)
			// if (!this.obj[index]) {
			//     this.obj[index] = route.meta.title
			//     // this.$store.state.editableTabs.editableTabsValue = index.toString()
			//     this.editableTabsValue.path = route.path
			//     this.editableTabsValue.name = index.toString()
			//     this.editableTabsArr.push({ title: route.meta.title, name: '' + index, path: route.path })
			//     sessionStorage.setItem('editableTabsArr', JSON.stringify(this.editableTabsArr))
			// }
			if (this.editableTabsArr.some(v => v.path === route.path)) return;
			this.editableTabsArr.push({
				title: route.meta.title,
				name: "" + index,
				path: route.path
			});
			sessionStorage.setItem(
				"editableTabsArr",
				JSON.stringify(this.editableTabsArr)
			);
		}
	},
	mounted() {
		console.log(this.$router);
		console.log(this.$route);
	}
};
</script>

<style lang="less">
.sidebar {
	width: 256px;
	height: 100%;
	background: #001529;
	overflow: hidden;
	transition: 0.28s;
	&.collapse {
		width: 64px;
		.logo {
			width: 64px;
			.logo-name {
				display: none;
			}
		}
	}
	.logo {
		width: 256px;
		height: 64px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #002140;
		.logo-img {
			width: 28px;
		}
		.logo-name {
			height: 64px;
			line-height: 64px;
			font-size: 16px;
			font-weight: bold;
			color: rgba(255, 255, 255, 0.85);
			margin-left: 12px;
		}
	}
}
</style>
