#!/usr/bin/env node

var fs = require('fs');
var outfile = "prime-numbers.txt";
var primes = [2];

var index = 2;

while (primes.length < 100) {
	index++;

	var j = 0;

	while ((index % primes[j] !== 0) && j < primes.length) {
		j++;
	}

	if (j >= primes.length) {
		primes.push(index);
	}
}

var out = primes + "\n"

fs.writeFileSync(outfile, out);  

console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
