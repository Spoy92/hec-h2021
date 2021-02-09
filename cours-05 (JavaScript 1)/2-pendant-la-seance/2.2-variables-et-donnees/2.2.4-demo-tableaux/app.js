var skus = [
	'AB7219',
	'BO9091',
	'TY8713'
];

var monIndex = 1;

console.log(skus[0]);
console.log(skus[2]);

skus[monIndex] = 'BA9091';
console.log(skus[monIndex]);

skus.push('YX4546');
console.log(skus);

console.log(skus.length);

console.log(skus.includes('YX4546'));