// Funções para SPA
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('fade-in'); // Reset animation
    });
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('fade-in'); // Apply animation

    // Atualiza links de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-menu a[onclick="showPage('${pageId}')"]`).classList.add('active');
    
    // Fecha menu mobile se estiver aberto
    if (document.getElementById('navbar').classList.contains('mobile-active')) {
        toggleMobileMenu();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Menu Mobile
function toggleMobileMenu() {
    document.getElementById('navbar').classList.toggle('mobile-active');
}

// Carrega a página inicial ao carregar o site
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});