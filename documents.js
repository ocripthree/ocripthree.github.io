// Rolagem suave ao clicar nos links do painel
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link
      const targetId = this.getAttribute('href').substring(1); // Remove o "#" do href
      const targetSection = document.getElementById(targetId); // Encontra a seção correspondente
  
      // Rola até a seção com comportamento suave
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });