let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  let dinero = document.getElementById("valor").value;
  e.preventDefault();
  localStorage.setItem("dinero", dinero);
});

document.addEventListener("submit", () => {
  let dinero = localStorage.getItem("dinero");
  let dolar = 3800;
  let mexicano = 180.3;
  let euro = 4134.88;
  let libra = 4995.95;
  let resultado = document.getElementById("resultado");
  resultado.setAttribute("style", "color:green;");

  if (document.getElementById("USD").checked) {
    let cambio = (parseInt(dinero) / dolar).toFixed(2);
    resultado.innerHTML = `<h1>$${dinero} pesos colombianos son:  $ ${cambio} en dolares.</h1>`;
  } else if (document.getElementById("MX").checked) {
    cambio = (parseInt(dinero) / mexicano).toFixed(2);
    resultado.innerHTML = `<h1>$${dinero} pesos colombianos son:  $ ${cambio} en pesos mexicanos.</h1>`;
  } else if (document.getElementById("EUR").checked) {
    cambio = (parseInt(dinero) / euro).toFixed(2);
    resultado.innerHTML = `<h1>$${dinero} pesos colombianos son:  $ ${cambio} en euros.</h1>`;
  } else if (document.getElementById("LIB").checked) {
    cambio = (parseInt(dinero) / libra).toFixed(2);
    resultado.innerHTML = `<h1>$${dinero} pesos colombianos son:  $ ${cambio} en libra esterlinas.</h1>`;
  }
  form.reset();
});
