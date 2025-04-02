const PreferenciaDeVisao = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

document.querySelectorAll('.clickable-item').forEach(item => {
  item.addEventListener('click', function() {
      const projectType = this.getAttribute('data-project');
      
      // Redirecionar para página específica do projeto
      window.location.href = `projetos/${projectType}.html`;
      
      // Ou abrir modal (se preferir)
      // abrirModalProjeto(projectType);
  });
  
  // Adiciona suporte para teclado (acessibilidade)
  item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
          this.click();
      }
  });
  
  // Importante para acessibilidade
  item.setAttribute('tabindex', '0');
  item.setAttribute('role', 'button');
});