let currentScroll = 0;
let targetScroll = 0;
const speed = 0.1;

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    targetScroll += e.deltaY;
    targetScroll = Math.max(
      0,
      Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
    );
  },
  { passive: false }
);

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * speed;
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

export { smoothScroll };
