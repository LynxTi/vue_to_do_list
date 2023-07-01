import { createRouter, createWebHashHistory } from "vue-router";
import TasksList from "@/components/TasksList.vue";
import createNewTaskScreen from "@/pages/CreateNewTaskScreen.vue";
import EditTaskScreen from "@/pages/EditTaskScreen";

const routes = [
    {
        path: '/',
        name: 'home',
        component: TasksList
    },
    {
        path: '/create',
        name: 'createNew',
        component: createNewTaskScreen
    },
    {
        path: '/edit/:taskId',
        name: 'editTask',
        component: EditTaskScreen,
        props: true
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (to.hash) {
                if (to.name === from.name) {
                    return {
                        el: to.hash,
                        behavior: "smooth",
                    };
                }
            }
            return { left: 0, top: 0 };
        }
    },
});

export default router
