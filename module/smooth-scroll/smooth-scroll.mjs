function smoothScroll() {
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    let current = window.scrollY;
    let target = window.scrollY;
    const speed = 0.08;

    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        target += e.deltaY;
        target = Math.max(
          0,
          Math.min(target, document.body.scrollHeight - innerHeight)
        );
      },
      { passive: false }
    );

    function smooth() {
      current += (target - current) * speed;
      window.scrollTo(0, current);
      requestAnimationFrame(smooth);
    }

    smooth();
  }
}

export { smoothScroll };
