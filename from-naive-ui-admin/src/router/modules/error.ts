export default {
  path: "/error",
  redirect: "/error/403",
  component: () => import("@/layout/index.vue"),
  meta: {
    sort: 4,
    title: "异常页面",
    icon: "ExclamationCircleOutlined",
  },
  children: [
    {
      path: "/error/403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        title: "403",
      },
    },
    {
      path: "/error/404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "404",
      },
    },
    {
      path: "/error/500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "500",
      },
    },
  ],
};