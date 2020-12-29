let phrase = 'Bonjour tout le monde      ';
console.log(phrase.length);
console.log(phrase.trim());
console.log(phrase.trim().length);
console.log(phrase.charAt(20));
console.log(phrase.slice(8, 21));
console.log(`${phrase.substr(0, 7)} ${phrase.slice(8, 21)}`);
console.log(phrase.substr(0, 7));

let phrase2 = "Ceci est une variable de type number!"
console.log(phrase2.replace("number","string"));

let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
console.log(phrase3.replace("NuMbEr","number").replace("Number","number").replace("numBer","number").replace("numbeR","number"));

