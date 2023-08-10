const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Teks: ", (inputString) => {
    console.log(`Panjang Seluruh Kata: ${inputString.length}`);
    rl.close();
});

// panjang seluruh "Budi adalah seorang siswa jurusan RPL yang tinggal didaerah Bekasi" adalah 66