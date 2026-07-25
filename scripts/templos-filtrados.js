const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Novos templos adicionados
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 253015,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple.jpg"
  },
  {
    nomeDoTemplo: "Fortaleza Brasil",
    localizacao: "Fortaleza, Brasil",
    consagracao: "2019, 2 de junho",
    area: 36000,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/fortaleza-brazil-temple.jpg"
  },
  {
    nomeDoTemplo: "Porto Alegre, Brasil",
    localizacao: "Porto Alegre, Brasil",
    consagracao: "2006, 15 de maio",
    area: 11500,
    urlDaImagem:
    "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-6697.jpg"
  }
];

// Função para renderizar templos
function renderTemplos(lista) {
  const galeria = document.getElementById("galeria-templos");
  galeria.innerHTML = "";
  lista.forEach(templo => {
    const card = document.createElement("div");
    card.classList.add("templo-card");
    card.innerHTML = `
      <h3>${templo.nomeDoTemplo}</h3>
      <p><strong>Localização:</strong> ${templo.localizacao}</p>
      <p><strong>Consagração:</strong> ${templo.consagracao}</p>
      <p><strong>Área:</strong> ${templo.area} pés²</p>
      <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
    `;
    galeria.appendChild(card);
  });
}

// Filtros
document.getElementById("home").addEventListener("click", () => renderTemplos(templos));
document.getElementById("antigos").addEventListener("click", () => {
  renderTemplos(templos.filter(t => parseInt(t.consagracao.split(",")[0]) < 1900));
});
document.getElementById("novos").addEventListener("click", () => {
  renderTemplos(templos.filter(t => parseInt(t.consagracao.split(",")[0]) > 2000));
});
document.getElementById("grandes").addEventListener("click", () => {
  renderTemplos(templos.filter(t => t.area > 90000));
});
document.getElementById("pequenos").addEventListener("click", () => {
  renderTemplos(templos.filter(t => t.area < 10000));
});

// Footer dinâmico
document.getElementById("ano").textContent = new Date().getFullYear();
document.getElementById("ultima-modificacao").textContent = document.lastModified;

// Render inicial
renderTemplos(templos);