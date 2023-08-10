const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Teks: ", (inputString) => {
    console.log(`Panjang Seluruh Kata: ${inputString.length}`);
    rl.close();
});

// panjang seluruh "Ibu Kota Negara?" adalah 17