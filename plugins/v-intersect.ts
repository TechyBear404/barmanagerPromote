import { defineNuxtPlugin } from "#app";
import { DirectiveBinding } from "vue";

interface IntersectionOptions {
  handler: (entries: IntersectionObserverEntry[]) => void;
  options?: IntersectionObserverInit;
  once?: boolean;
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("intersect", {
    mounted(el: HTMLElement, binding: DirectiveBinding<IntersectionOptions>) {
      const { value } = binding;
      const { handler, options = {}, once = false } = value || {};

      // Ne pas initialiser l'observer sur mobile
      if (window.innerWidth < 768) {
        handler([{ isIntersecting: true } as IntersectionObserverEntry]);
        return;
      }

      // Valeurs par défaut optimisées pour desktop
      const defaultOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "50px 0px",
      };

      const observer = new IntersectionObserver(
        (entries) => {
          handler(entries);
          if (once && entries[0].isIntersecting) {
            observer.unobserve(el);
          }
        },
        { ...defaultOptions, ...options }
      );

      observer.observe(el);
      el._observer = observer;
    },

    unmounted(el: HTMLElement) {
      if (el._observer) {
        el._observer.disconnect();
      }
    },
  });
});
