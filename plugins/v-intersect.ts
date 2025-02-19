import { defineNuxtPlugin } from '#app';
import { DirectiveBinding } from 'vue';

interface IntersectionOptions {
  handler: (entries: IntersectionObserverEntry[]) => void;
  options?: IntersectionObserverInit;
  once?: boolean;
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('intersect', {
    mounted(
      el: HTMLElement,
      binding: DirectiveBinding<IntersectionOptions>
    ) {
      const { value } = binding;
      const { handler, options = {}, once = false } = value || {};

      // Valeurs par défaut améliorées
      const defaultOptions = {
        root: null,
        threshold: 0.05,
        rootMargin: '100px 0px',
      };

      // Fonction pour vérifier si l'élément est visible
      const isElementInViewport = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
        );
      };

      // Création de l'observer
      const observer = new IntersectionObserver(
        (entries) => {
          handler(entries);
          if (once && entries[0].isIntersecting) {
            observer.unobserve(el);
            window.removeEventListener('scroll', scrollHandler);
          }
        },
        { ...defaultOptions, ...options }
      );

      // Gestionnaire de scroll comme fallback
      const scrollHandler = () => {
        if (isElementInViewport(el)) {
          handler([{ isIntersecting: true } as IntersectionObserverEntry]);
          if (once) {
            window.removeEventListener('scroll', scrollHandler);
            observer.unobserve(el);
          }
        }
      };

      // Observer l'élément
      observer.observe(el);

      // Ajouter l'écoute du scroll
      window.addEventListener('scroll', scrollHandler, { passive: true });

      // Vérifier immédiatement si l'élément est visible
      if (isElementInViewport(el)) {
        scrollHandler();
      }

      // Stockage des références pour le nettoyage
      el._observer = observer;
      el._scrollHandler = scrollHandler;
    },
    
    unmounted(el: HTMLElement) {
      if (el._observer) {
        el._observer.disconnect();
      }
      if (el._scrollHandler) {
        window.removeEventListener('scroll', el._scrollHandler);
      }
    },
  });
});
