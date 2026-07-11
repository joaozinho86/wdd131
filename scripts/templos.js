// templos.js

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const anoAtual = new Date().getFullYear();
  const ultimaModificacao = document.lastModified;

  footer.innerHTML = `
    <p>©${anoAtual} 🎓 João Alberto Gonçalves Correa 🎓 Brasil</p>
    <p>Última Modificação: ${ultimaModificacao}</p>
  `;
  
  // Menu hambúrguer responsivo
  const nav = document.querySelector("nav ul");
  const header = document.querySelector("header");

  const btnHamburguer = document.createElement("button");
  btnHamburguer.classList.add("hamburguer");
  btnHamburguer.innerHTML = "☰";
  header.insertBefore(btnHamburguer, nav);

  btnHamburguer.addEventListener("click", () => {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      btnHamburguer.innerHTML = "☰";
    } else {
      nav.style.display = "flex";
      btnHamburguer.innerHTML = "✖";
    }
  });

  const ajustarMenu = () => {
    if (window.innerWidth < 768) {
      nav.style.display = "none";
      btnHamburguer.style.display = "block";
    } else {
      nav.style.display = "flex";
      btnHamburguer.style.display = "none";
    }
  };

  ajustarMenu();
  window.addEventListener("resize", ajustarMenu);
});