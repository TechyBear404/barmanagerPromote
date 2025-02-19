import { onMounted, onUnmounted } from "vue";

export function useParallax() {
  const handleScroll = () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll(".parallax-bg");

    parallaxElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const limit = htmlEl.offsetHeight * 0.3;
      const yPos = -(scrolled * 0.2);
      const transform = `translate3d(0, ${Math.min(
        Math.max(yPos, -limit),
        limit
      )}px, 0) scale(1.1)`;
      htmlEl.style.transform = transform;
    });
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set position
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
}
