document.addEventListener("DOMContentLoaded", () => { // Garante que o DOM esteja carregado
  const checkboxes = document.querySelectorAll('.category-filter input[type="checkbox"]'); // Todas as checkboxes do filtro
  const cards = document.querySelectorAll('.col-md-3.mb-4[data-categoria]'); // Containers externos com data-categoria
  const filtroLateral = document.getElementById("filtroLateral"); // Filtro lateral
  const toggleBtn = document.getElementById("toggle-filtro"); // Botão abrir/fechar filtro
  const mainContent = document.querySelector('.main-content'); // Conteúdo principal
  const btnFiltrar = document.getElementById('btn-filtrar'); // Botão filtrar

  // Inicializa: mostra todos os cards e esconde botão filtrar
  cards.forEach(card => card.style.display = 'block');
  btnFiltrar.hidden = true;

  // Mostrar botão filtrar sempre que mudar checkbox
  function verificarMostrarBotao() { // Verifica se pelo menos uma checkbox está marcada
    btnFiltrar.hidden = false;
  }

  // Aplica filtro baseado nas categorias selecionadas
  function aplicarFiltro() { // Aplica o filtro quando o botão filtrar é clicado
    const categoriasSelecionadas = Array.from(checkboxes)
      .filter(cb => cb.checked) // Filtra checkboxes marcadas
      .map(cb => cb.value); // Extrai os valores das checkboxes marcadas

    cards.forEach(card => { // Itera sobre cada card
      const categoria = card.dataset.categoria; // Obtém a categoria do card
      if (categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(categoria)) { // Se nenhuma categoria está selecionada ou a categoria do card está entre as selecionadas
        card.style.display = 'block'; // Mostra o card
      } else {
        card.style.display = 'none'; // Esconde o card
      }
    });
  }

  // Adiciona eventos para mostrar botão ao alterar checkbox
  checkboxes.forEach(cb => cb.addEventListener('change', verificarMostrarBotao));

  // Adiciona evento para filtrar ao clicar no botão filtrar
  btnFiltrar.addEventListener('click', aplicarFiltro);

  // Botão abrir/fechar filtro lateral
  toggleBtn.addEventListener('click', () => { // Alterna a visibilidade do filtro lateral
    filtroLateral.classList.toggle('aberto'); // Alterna a classe 'aberto' no filtro lateral
    if (mainContent) { // Se o conteúdo principal existir
      mainContent.classList.toggle('com-filtro-aberto'); // Alterna a classe 'com-filtro-aberto' no conteúdo principal
    }
  });
});
