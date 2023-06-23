function criarCamposNotas() {
  var numAlunos = parseInt(document.getElementById("numAlunos").value);
  var notasContainer = document.getElementById("notasContainer");
  notasContainer.innerHTML = "";

  for (var i = 1; i <= numAlunos; i++) {
    var label = document.createElement("label");
    label.innerHTML = "Aluno " + i + ": ";
    var input = document.createElement("input");
    input.type = "text";
    input.id = "nota" + i;
    notasContainer.appendChild(label);
    notasContainer.appendChild(input);
    notasContainer.appendChild(document.createElement("br"));
  }
}

function calcularMedia() {
  var numAlunos = parseInt(document.getElementById("numAlunos").value);
  var soma = 0;

  for (var i = 1; i <= numAlunos; i++) {
    var nota = parseFloat(document.getElementById("nota" + i).value);

    if (!isNaN(nota)) {
      soma += nota;
    }
  }

  var media = soma / numAlunos;
  document.getElementById("media").innerHTML =
    "Média da Sala: " + media.toFixed(2);
}
