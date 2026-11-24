// Ativar links do Menu

const linksNav = document.querySelectorAll(".header-menu a");

function ativarLinkNav(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
linksNav.forEach(ativarLinkNav);

// Parâmetros URL (Ativar itens do orçamento)

const params = new URLSearchParams(location.search);

params.forEach((item) => {
  const element = document.querySelector(`[type="radio"][value="${item}"]`);
  if (element) element.checked = true;
});
