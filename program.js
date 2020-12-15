console.log("Una de las formas de definir una función consiste en definir una variable");
console.log("a la que se le asigna una función (anónima) como valor.");
console.log("E.g.:");

let cuadrado = function(x) {
	return x * x;
}

console.log(`cuadrado(12) retorna el valor: ${cuadrado(12)}`);

console.log();
console.log("Una función puede tener 0 o más parámetros");

const makeNoise = function() {
	console.log("pling!");
}

console.log("como makeNoise() que tiene 0 parámetros e imprime la cadena: ");
makeNoise();

const power = function(base, exponente) {
	let result = 1;
	for (let i = 0; i < exponente; ++i) {
		result *= base;
	}
	return result;
}

console.log(`o como power(base, exponente) que tiene 2 parámetros y retorna el valor ${power(2, 10)} si power(2, 10)`);
console.log();
console.log("Scope o ámbito o visibilidad");
console.log("Una variable declarada con var, puede ser visible fuera del bloque en el que ha sido declarada.")
console.log("Excepto si el bloque se trata de una función.");
console.log("En cambio, la visibilidad de una variable declarada con let, se restringe al bloque en el que ha sido declarada.")

let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
}
// y is not visible here
console.log(x + z);

console.log("Una variable y el parámetro de una función definidos con el mismo nombre, se consideran diferentes.");

const halve = function(n) {
	return n / 2;
};

let n = 10;
console.log(halve(100));
console.log(n);

console.log("Ámbitos imbricados o anidados. También concido como ámbito léxico, se refiere a que desde un ámbito determinado");
console.log("se puede acceder a variables que están en un ámbito fuera de él. Ver ejemplo en el código.");

let q = 10;

const multiplica = function() {
	return q * 4;
}

console.log(multiplica());

console.log("Por otro lado se puede llamar a una función que ha sido definida dentro de una función desde la propia función.");
console.log("Ver ejemplo en el código fuente.")

const humus = function(factor) {
	const ingredient = function(amount, unit, name) {
		let ingredientAmount = amount * factor;
		if (ingredientAmount > 1) unit += "s";
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};

humus(4);

console.log();
console.log("Funciones como valores. Cuando una variable se declara con let, se le puede asignar una u otra función");
console.log("dependiendo por ejemplo, del resultado de la evaluación de una condición. Ver código fuente");

let launchMissiles = function() {
	console.log("Target: URSS");
};

if (true) {
	launchMissiles = function() {
		console.log("Abort");
	}
}

launchMissiles();

console.log();
console.log("Notación de declaración. Cuando una función se declara mediante la palabra reservada function seguida del");
console.log("identificador de la función, estamos declarando una función que es compatible con hoisting, lo que es útil");
console.log("mientras se programa para elegir el sitio donde llamar a una función antes de crearla. Ver código fuente");

console.log("The future says:", future());

function future() {
	return "You'll have flying cars";
}

console.log();
console.log("Otro tipo de funciones son las funciones flecha. Estas funciones (ánonimas) tienen una sintaxis más compacta.");
console.log("También tiene otras características importantes");
console.log("que se exponen aqui: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions");
console.log("Se asignan a variables y si solo tienen un argumento no hace falta ponerlo entre paréntesis.");
console.log("Además, si el cuerpo de la función solo consta de una línea, no hace falta encerrarlo entre llaves");
console.log("y no es necesario usar la palabra reservada return.");
console.log("Ver código fuente");

const square = x => x * x;
console.log(square(14));

const foo = () => console.log("foo");
foo();

const potencia = (base, exponente) => {
	let result = 1;
	for (let i = 0; i < exponente; ++i) result *= base;
	return result;
};
console.log(potencia(2, 12));

console.log("A continuación se hace mención a la pila de llamadas, que requiere memoria para poder implementarse");
console.log("y lleva un registro de las llamadas a funciones para poder volver al contexto desde el que se llamaron");
console.log("cuando finalizan su ejecución. Para más información: https://es.wikipedia.org/wiki/Pila_de_llamadas");

function chicken() {
	return egg();
}

function egg() {
	return chicken();
}

//console.log(chicken() + "came first."); //Causa un error interno. Too much recursion.

console.log();
console.log("Argumentos opcionales. Los argumentos extra son ignorados y los que faltan toman por valor undefined.");
console.log("Ver código fuente.");

function square2(x) { return x * x; };
console.log(square2(4, true, "hedgehog"));

function minus(a, b) {
	if (b == undefined) return -a;
	else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));

console.log("En el siguiente capítulo se estudia la posibilidad de pasar una lista de argumentos en la llamada de una función.");
console.log();
console.log("La funciones closure permiten acceder al ámbito de una función exterior desde una función interior.");
console.log("En la práctica, se trata de una función que retorna otra función.");
console.log("Ver código fuente.");

function multiplier(factor) {
	return number => number * factor;
};

let twice = multiplier(2);
console.log(twice(5));

console.log("Para más información: https://developer.mozilla.org/es/docs/Web/JavaScript/Closures");
console.log();
console.log("Recursividad. Función que se llama a si misma");
console.log("Ver código fuente");

function powerRec(base, exponent) {
	if (exponent == 0) return 1;
	else return powerRec(base, exponent - 1) * base;
};

console.log(powerRec(2, 6));

console.log();
console.log("Minimum");

const min = (a, b) => a < b ? a : b;

console.log(min(7, 3));
console.log(min(0, 10));
console.log(min(6, -11));

console.log();
console.log("Recursion");

function isEven(n) {
	if (n < 0) n = -n;
	if (n == 0) return true;
	else if (n == 1) return false;
	else return isEven(n - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-12));

console.log();
console.log("Bean counting");
console.log("Se puede obtener el carácter n-ésimo de una cadena escribiendo cadena[n] e.g. ver código fuente.");
let s = "Ismael";
console.log(s[2]);
console.log(s[0]);
console.log(s[s.length - 1]);

const countBs = cadena => {
	if (typeof cadena != "string") cadena = String(cadena);
	return countChar(cadena, 'B');
}

const countChar = (cadena, character) => {
	if (typeof cadena != "string") cadena = String(cadena);
	if (typeof character != "string") character = String(character);
	let count = 0;
	for (let i = 0; i < cadena.length; ++i) {
		if (cadena[i] == character) ++count;
	}
	return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
