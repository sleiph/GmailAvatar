// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var cabeca = document.getElementById("cabeca");
var cabecaBase = document.getElementById("cabecaBase");
var corpo = document.getElementById("corpo");
var corpoBase = document.getElementById("corpoBase");
var nestFormas = document.getElementById("formas");
var nestCores = document.getElementById("cores");

var root = document.querySelector(":root");

var personagens = [
	{
		nome: 'blank',
		sobrenome: '',
		cabeca: [''],
		corpo: ['']
	},
	{
		nome: 'Mario',
		sobrenome: 'Mario',
		cabeca: ['bigodeMarioNietzsche', 'chapeuMario'],
		corpo: ['macacaoMario']
	},
	{
		nome: 'pikachu',
		sobrenome: '',
		cabeca: ['pokeRosto', 'pokeOrelhas'],
		corpo: ['pokeCauda']
	},
	{
		nome: 'Mickey',
		sobrenome: 'Mouse',
		cabeca: ['orelhasMickey'],
		corpo: ['shortsMickey']
	},
	{
		nome: 'Finn',
		sobrenome: 'Mertens',
		cabeca: ['capuzFinn'],
		corpo: ['mochilaFinn']
	},
	{
		nome: 'Bart',
		sobrenome: 'Simpson',
		cabeca: ['cabeloBart', 'narizBart'],
		corpo: ['']
	},
	{
		nome: 'Homer',
		sobrenome: 'Simpson',
		cabeca: ['cabeloHomer', 'barbaHomer'],
		corpo: ['golaHomer']
	},
	{
		nome: 'batman',
		sobrenome: '',
		cabeca: ['mascaraBatman'],
		corpo: ['morcegoBatman', 'capaBatman']
	},
	{
		nome: 'coringa',
		sobrenome: '',
		cabeca: ['cabeloCoringa'],
		corpo: ['camisaCoringa', 'sobretudoCoringaLedger']
	},
	{
		nome: 'Heath',
		sobrenome: 'Ledger',
		cabeca: ['cabeloLedger'],
		corpo: ['vesteLedger', 'sobretudoCoringaLedger']
	},
	{
		nome: 'Clark',
		sobrenome: 'Kent',
		cabeca: ['cabeloSuperClark', 'oculosEmicidaChomskyClark'],
		corpo: ['camisaEmicidaChomskyClark']
	},
	{
		nome: 'superman',
		sobrenome: '',
		cabeca: ['cabeloSuperClark'],
		corpo: ['capaSuper', 'esperancaSuper']
	},
	{
		nome: 'Shikamaru',
		sobrenome: 'Nara',
		cabeca: ['cabeloShika'],
		corpo: ['coleteShika', 'bolsosShika', 'ombreirasShika', 'pescoceiraShika', 'bandanaShika']
	},
	{
		nome: 'conde',
		sobrenome: 'Dracula',
		cabeca: ['bocaDracula', 'cabeloVitoCoringaDracula'],
		corpo: ['capaDracula', 'ternoDracula', 'fraqueVitoDracula', 'bolsoDracula', 'gravataDracula']
	},
	{
		nome: 'ninja',
		sobrenome: '',
		cabeca: ['mascaraNinja'],
		corpo: ['espadaNinja', 'vestesNinja']
	},
	{
		nome: 'Vito',
		sobrenome: 'Corleone',
		cabeca: ['bigodeFreddieVito', 'cabeloVitoCoringaDracula'],
		corpo: ['fraqueVitoDracula', 'gravataVito', 'rosaVito']
	},
	{
		nome: 'John',
		sobrenome: 'Rambo',
		cabeca: ['faixaRambo'],
		corpo: ['medalhaoRambo']
	},
	{
		nome: 'Darth',
		sobrenome: 'Vader',
		cabeca: ['mascaraVader'],
		corpo: ['painelVader', 'capaVader']
	},
	{
		nome: 'Chaves',
		sobrenome: '',
		cabeca: ['gorroChaves'],
		corpo: ['camisaChaves', 'suspensoriosChaves']
	},
	{
		nome: 'Charlie',
		sobrenome: 'Chaplin',
		cabeca: ['bigodeChaplin', 'chapeuMagritteChaplin'],
		corpo: ['casacoChaplin']
	},
	{
		nome: 'Kim',
		sobrenome: 'Jong-un',
		cabeca: ['cabeloKim'],
		corpo: ['uniformeKim', 'botao1', 'botao2', 'botao3', 'botao4', 'brocheKim']
	},
	{
		nome: 'Friedrich',
		sobrenome: 'Nietzsche',
		cabeca: ['bigodeMarioNietzsche', 'cabeloNietzsche'],
		corpo: ['fraqueNietzsche']
	},
	{
		nome: 'Noam',
		sobrenome: 'Chomsky',
		cabeca: ['oculosEmicidaChomskyClark', 'cabeloChomsky', 'chapeuChomsky'],
		corpo: ['camisaEmicidaChomskyClark']
	},
	{
		nome: 'Virginia',
		sobrenome: 'Woolf',
		cabeca: ['cabeloVirginia'],
		corpo: ['perolasVirginia', 'ternoVirginia']
	},
	{
		nome: 'René',
		sobrenome: 'Magritte',
		cabeca: ['chapeuMagritteChaplin', 'macaMagritte'],
		corpo: ['camisaMagritte', 'gravataMagritte', 'casacoMagritte']
	},
	{
		nome: 'Salvador',
		sobrenome: 'Dalí',
		cabeca: ['bigodeDali'],
		corpo: ['camisaDali', 'gravataDali', 'riscaDali']
	},
	{
		nome: 'Emicida',
		sobrenome: '',
		cabeca: ['oculosEmicidaChomskyClark', 'cabeloEmicida'],
		corpo: ['camisaEmicidaChomskyClark', 'suspensoriosEmicida']
	},
	{
		nome: 'Freddie',
		sobrenome: 'Mercury',
		cabeca: ['bigodeFreddieVito'],
		corpo: ['pelosFreddie', 'camisaFreddie']
	}
];

var cores = [
	{
		nome: 'azul',
		clr: 'var(--azulClr)',
		nrm: 'var(--azul)',
		esc: 'var(--azulEsc)',
		cmpl: 'var(--vermelho)',
		cmplEsc: 'var(--vermelhoEsc)'
	},
	{
		nome: 'verde',
		clr: 'var(--verdeClr)',
		nrm: 'var(--verde)',
		esc: 'var(--verdeEsc)',
		cmpl: 'var(--vermelho)',
		cmplEsc: 'var(--vermelhoEsc)'
	},
	{
		nome: 'amarelo',
		clr: 'var(--amareloClr)',
		nrm: 'var(--amarelo)',
		esc: 'var(--laranja)',
		cmpl: 'var(--roxo)',
		cmplEsc: 'var(--roxoEsc)'
	},
	{
		nome: 'vermelho',
		clr: 'var(--vermelhoClr)',
		nrm: 'var(--vermelho)',
		esc: 'var(--vermelhoEsc)',
		cmpl: 'var(--azul)',
		cmplEsc: 'var(--azulEsc)'
	},
	{
		nome: 'roxo',
		clr: 'var(--roxoClr)',
		nrm: 'var(--roxo)',
		esc: 'var(--roxoEsc)',
		cmpl: 'var(--verde)',
		cmplEsc: 'var(--verdeEsc)'
	},
	{
		nome: 'cinza',
		clr: 'white',
		nrm: 'var(--cinzaClr)',
		esc: 'var(--cinza)',
		cmpl: 'black',
		cmplEsc: 'var(--cinza)'
	}
];

function formaCabeca(bliu) {
	cabeca.innerHTML = '';
	console.log( bliu[0] )
	for (var i = 0; i < bliu.length; i++) {
		var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
		use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + bliu[i].id);
		cabeca.appendChild(use)
	};
};

function formaCorpo(bliu) {
	corpo.innerHTML = '';
	for (var i = 0; i < bliu.length; i++) {
		corpo.appendChild(bliu[i])
	};
};

cabecaBase.addEventListener("click", randomCabeca);
corpoBase.addEventListener("click", randomCorpo);
cabeca.addEventListener("click", randomCabeca);
corpo.addEventListener("click", randomCorpo);

function randomCabeca() {
	var math = Math.floor(Math.random() * personagens.length);
	formaCabeca(math);
};

function randomCorpo() {
	var math = Math.floor(Math.random() * personagens.length);
	formaCorpo(math);
};

function corCabeca(cor) {
	root.style.setProperty('--cabecaClr', cores[cor].clr);
	root.style.setProperty('--cabeca', cores[cor].nrm);
	root.style.setProperty('--cabecaEsc', cores[cor].esc);
	root.style.setProperty('--cabecaCmpl', cores[cor].cmpl);
	root.style.setProperty('--cabecaCmplEsc', cores[cor].cmplEsc);
};
function corCorpo(cor) {
	root.style.setProperty('--corpoClr', cores[cor].clr);
	root.style.setProperty('--corpo', cores[cor].nrm);
	root.style.setProperty('--corpoEsc', cores[cor].esc);
	root.style.setProperty('--complementar', cores[cor].cmpl);
	root.style.setProperty('--complementarEsc', cores[cor].cmplEsc);
};

function esvaziarTudo() {
	formaCabeca(0);
	formaCorpo(0);
	corCabeca(0);
	corCorpo(0);
};

function teste() {
	console.log(personagens.length);
};
