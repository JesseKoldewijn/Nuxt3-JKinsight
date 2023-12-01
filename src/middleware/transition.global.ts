export default defineNuxtRouteMiddleware((to) => {
  // @ts-ignore-next-line
  if (import.meta.server || !document.startViewTransition) {
    return;
  }

  // Disable built-in Vue transitions
  to.meta.pageTransition = false;
  to.meta.layoutTransition = false;
});
