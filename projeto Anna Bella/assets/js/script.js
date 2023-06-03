// Seleciona o botão de toggle do menu
const menuToggle = document.querySelector('.menu-toggle');

// Adiciona o evento de clique ao botão de toggle
menuToggle.addEventListener('click', function() {
  const menuList = this.nextElementSibling; // Seleciona a lista de itens do menu

  // Alterna a exibição da lista de itens
  if (menuList.style.display === 'block') {
    menuList.style.display = 'none';
  } else {
    menuList.style.display = 'block';
  }
});