function eventScroll() {
    const checkBoxes = () => {
      const boxes = document.querySelectorAll(".box");
      const triggerBottom = (window.innerHeight / 5) * 4;
  
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
  
        if (boxTop < triggerBottom) {
          box.classList.add("animate-on-scroll");
        } else {
          box.classList.remove("animate-on-scroll");
        }
      });
    };
  
    const throttleScroll = () => {
      window.requestAnimationFrame(checkBoxes);
    };
  
    window.addEventListener("scroll", throttleScroll);
    window.addEventListener("touchmove", throttleScroll, { passive: true });
  
    // Ejecuta inmediatamente para aplicar animaciones sin necesidad de hacer scroll
    checkBoxes();
  }
  
  // ✅ Solo necesitas esto para reiniciar la lógica tras una navegación
  document.addEventListener("astro:page-load", eventScroll);
  