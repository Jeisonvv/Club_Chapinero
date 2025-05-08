function initializeMenu() {
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');
  

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      
      nav.classList.toggle('open');
    });
    
  } else {
    console.warn('⚠️ Botón o menú no encontrado');
  }
}
initializeMenu();

// Ejecutar después de cada navegación de Astro
document.addEventListener('astro:page-load', initializeMenu);
document.addEventListener('DOMContentLoaded', initializeMenu);
