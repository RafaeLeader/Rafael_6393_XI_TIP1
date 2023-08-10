const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan Sebuah Kalimat: ", (kalimat)=>{
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
})

// Ubah string "Hello World!" menjadi huruf kecil (lowercase).