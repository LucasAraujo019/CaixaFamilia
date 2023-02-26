var nomes = [];

function adicionar() {
    var nome = document.getElementById("nome").value.trim();
    if (nome !== "") {
        nomes.push(nome);
        document.getElementById("nome").value = "";
        document.getElementById("nome").focus();
        atualizarNomes();
    }
}
function atualizarNomes() {
    var lista = document.getElementById("lista-nomes");
    lista.innerHTML = "";

    for (var i = 0; i < nomes.length; i++) {
        var nome = nomes[i];
        var itemLista = document.createElement("li");
        itemLista.innerText = nome;
        lista.appendChild(itemLista);
    }
}

function sortear() {
	var n = nomes.length;
	var posicoes = shuffle(Array.from(Array(n).keys()));

	var resultado = "";
	for (var i = 0; i < n; i++) {
		resultado += (i+1) + "º mês: " + nomes[posicoes[i]] + "<br>";
	}
	document.getElementById("resultado").innerHTML = resultado;
}
function resetar() {
    nomes = [];
    atualizarNomes();
    document.getElementById("resultado").innerHTML = "";
}


function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
