import { createRouter, createWebHistory } from "vue-router";

const page = (path) => () => import(`@/${path}`).then((m) => m.default || m);

const routes = [
  {
    path: "/",
    name: "glossary",
    component: page("views/GlossaryView.vue"),
  },
  {
    path: "/semantic",
    name: "semantic",
    component: page("views/SemanticTreeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
