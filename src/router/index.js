import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
const routes = [
      {
        name: "HomePage",
        path: "/",
        component: () => import("../views/Home.vue"),
      },
    {
        name: "UnitsPage",
        path: "/lists",
        component: () => import("../views/Units.vue"),
    },
    {
        name: "BoardPage",
        path: "/board/:id",
        component: () => import("../views/Board.vue"),
        props:true,
    },
    {
        name: "TasksPage",
        path: "/tasks",
        component: () => import("../views/Tasks.vue"),
        props:true,
    },
    {
        name: "TestApiPost",
        path: "/TestApiPost",
        component: () => import("../views/testApiPost.vue"),
        props:true,
    },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});
export default router;
