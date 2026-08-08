// Objeto para armazenar avaliações
const avaliacoes = {
  lista: [],
  adicionar(avaliacao) {
    this.lista.push(avaliacao);
    localStorage.setItem("avaliacoes", JSON.stringify(this.lista));
  }
};

// Recupera avaliações salvas
window.onload = () => {
  const armazenadas = JSON.parse(localStorage.getItem("avaliacoes")) || [];
  avaliacoes.lista = armazenadas;
  mostrarAvaliacoes(armazenadas);
};

// Função para exibir avaliações
function mostrarAvaliacoes(lista) {
  document.getElementById("resultado").innerHTML = lista.map(a => `
    <p><strong>${a.produto}</strong> - ${"★".repeat(a.classificacao)}<br>
    Recursos: ${a.recursos.join(", ")}<br>
    Comentário: ${a.comentario}<br>
    Nome: ${a.nome || "Anônimo"}<br>
    Data: ${a.data}</p>
  `).join("");
}

// Manipulação de DOM + branching condicional
document.getElementById("formPesquisa").addEventListener("submit", e => {
  e.preventDefault();

  const produto = document.getElementById("produto").value;
  const classificacao = document.getElementById("classificacao").value;
  const data = document.getElementById("data").value;
  const comentario = document.getElementById("comentario").value.trim();
  const nome = document.getElementById("nome").value.trim();

  const recursosSelecionados = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
    .map(cb => cb.value);

  if (produto && classificacao && data) {
    const avaliacao = {
      produto,
      classificacao: parseInt(classificacao),
      data,
      recursos: recursosSelecionados,
      comentario: comentario || "Sem comentário",
      nome
    };

    avaliacoes.adicionar(avaliacao);
    mostrarAvaliacoes(avaliacoes.lista);
    document.getElementById("formPesquisa").reset();
  } else {
    alert("Por favor, preencha os campos obrigatórios!");
  }
});