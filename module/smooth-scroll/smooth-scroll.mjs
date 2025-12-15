function smoothScroll(options = {}) {
  const { speed = 0.1 } = options;

  let currentScroll = window.scrollY;
  let targetScroll = window.scrollY;

  // Deteksi touchscreen
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Jangan jalankan di touchscreen
  if (isTouchDevice) return;

  function onWheel(e) {
    e.preventDefault();

    targetScroll += e.deltaY;

    targetScroll = Math.max(
      0,
      Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
    );
  }

  function smoothScroll() {
    currentScroll += (targetScroll - currentScroll) * speed;
    window.scrollTo(0, currentScroll);
    requestAnimationFrame(smoothScroll);
  }

  window.addEventListener("wheel", onWheel, { passive: false });
  smoothScroll();

  // optional: return cleanup function
  return () => {
    window.removeEventListener("wheel", onWheel);
  };
}

export { smoothScroll };
