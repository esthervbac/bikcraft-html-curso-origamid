const linksNav = document.querySelectorAll(".header-menu a");

function ativarLinkNav(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
linksNav.forEach(ativarLinkNav);
