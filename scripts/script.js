function calcularSensacaoTermica(tempC, ventoKmh) {
  // Fórmula simplificada de sensação térmica (em °C)
  return 13.12 + 0.6215*tempC - 11.37*Math.pow(ventoKmh, 0.16) + 0.3965*tempC*Math.pow(ventoKmh, 0.16);
}

document.addEventListener("DOMContentLoaded", () => {
  const temp = 8; // °C
  const vento = 10; // km/h
  const sensacaoEl = document.getElementById("sensacao");

  if (temp <= 10 && vento > 4.8) {
    sensacaoEl.textContent = calcularSensacaoTermica(temp, vento).toFixed(1) + " °C";
  } else {
    sensacaoEl.textContent = "N/A";
  }

  // Rodapé dinâmico
  document.getElementById("ano").textContent = new Date().getFullYear();
  document.getElementById("modificado").textContent = document.lastModified;
});